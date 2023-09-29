import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})

export class AuthService{
    private token: string | null = null;
    constructor(private http: HttpClient) {}

    login(username: string, password: string): void {
        const loginData = { username, password };

        this.http.post<{ token: string }>('auth/authenticate', loginData).subscribe(
            (response) => {
                this.token = response.token;
            },
            (error) => {
                console.error('login failed m8', error);
            }
        )
    }

    logout(): void{
        this.token = null;
    }

    isAuthenticated(): boolean{
        return !!this.token;
    }

    getToken(): string | null{
        return this.token;
    }
}