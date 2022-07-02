import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private token = '';
  private jwtToken$ = new BehaviorSubject<string>(this.token);
  private API_URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient,
              private router: Router,
              private toast: ToastrService) {
    this.validateJWT();
  }

  get jwtUserToken(): Observable<string> {
    return this.jwtToken$.asObservable();
  }

  /* Getting All Todos */
  getAllTodos(): Observable<any> {
    return this.http.get(`${this.API_URL}/todos`, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    });
  }

  verifyToken(token: string) {
    return this.http.post(`${this.API_URL}/auth/verifyToken`, {token});
  }

  login(username: string, password: string) {

    this.http.post(`${this.API_URL}/auth/login`, {username, password})

      .subscribe((res: any) => {
        this.token = res.token;

        if (this.token) {
          this.toast.success('Login successful, redirecting now...', '', {
            timeOut: 700,
            positionClass: 'toast-top-center'
          }).onHidden.toPromise().then(() => {
            this.jwtToken$.next(this.token);
            localStorage.setItem('act', btoa(this.token));
            this.router.navigateByUrl('/').then();
          });
        }
      }, (err: HttpErrorResponse) => {
        this.toast.error('Authentication failed, try again', '', {
          timeOut: 1000,
          positionClass: 'toast-top-center'
        });
      });
  }

  register(username: string, password: string) {
    console.log(username, password);
    return this.http.post(`${this.API_URL}/auth/register`, {username, password}).pipe(
      // @ts-ignore
      catchError((err: HttpErrorResponse) => {
        this.toast.error(err.error.message, '', {
          timeOut: 1000,
          positionClass: 'toast-top-center'
        });
      })
    );
  }


  logout() {
    this.token = '';
    this.jwtToken$.next(this.token);
    this.toast.success('Logged out succesfully', '', {
      timeOut: 500
    }).onHidden.subscribe(() => {
      localStorage.removeItem('act');
      this.router.navigateByUrl('/login').then();
    });
    return '';
  }


  createTodo(title: string, description: string) {
    return this.http.post(`${this.API_URL}/todos`, {title, description}, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    });
  }

  updateStatus(statusValue: string, todoId: number) {
    return this.http.patch(`${this.API_URL}/todos/${todoId}`, {status: statusValue}, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    }).pipe(
      tap(res => {
        if (res) {
          this.toast.success('Status updated successfully', '', {
            timeOut: 1000
          });
        }
      })
    );
  }

  deleteTodo(todoId: number) {
    return this.http.delete(`${this.API_URL}/todos/${todoId}`, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    }).pipe(
      tap(res => {
        // @ts-ignore
        if (res.success) {
          this.toast.success('Todo deleted successfully');
        }
      })
    );
  }


  private validateJWT() {
    const fetchedToken = localStorage.getItem('act');

    if (fetchedToken) {

      try {
        const decryptedToken = atob(fetchedToken);
        this.verifyToken(decryptedToken).toPromise().then((res: any) => {
          if (res.status) {
            this.token = decryptedToken;
            localStorage.setItem('act', btoa(this.token));
            this.jwtToken$.next(this.token);
          }
        }).catch((err: HttpErrorResponse) => {
          if (err) {
            localStorage.removeItem('act');
            this.token = '';
            this.jwtToken$.next(this.token);
          }
        });
      }
        // @ts-ignore
      catch (err: DOMException) {
        localStorage.removeItem('act');
        this.toast.info('Session not valid, please login again', 'Token Failure', {
          timeOut: 2000,
          positionClass: 'toast-top-center'
        });
      }
    }
  }


}

interface TokenResponse {
  status: boolean;
}
