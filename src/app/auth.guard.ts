import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  let router = inject(Router);
  
  let isLoggedIn = (typeof window !== 'undefined') ? sessionStorage.getItem("isLoggedIn") : null;

  if (!isLoggedIn || isLoggedIn === "false") {
    alert("You are not logged in yet, redirecting to login page...!");
    router.navigate(["/login"]); 
    return false;
  }

  return true;
};
