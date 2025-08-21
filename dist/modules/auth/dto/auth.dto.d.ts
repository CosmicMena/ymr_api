export declare class LoginDto {
    email: string;
    password: string;
}
export declare class RegisterDto {
    name: string;
    email: string;
    password: string;
    phone?: string;
    company?: string;
}
export declare class RefreshTokenDto {
    refreshToken: string;
}
