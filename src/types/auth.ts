export interface UserProfile {
  fullName: string;
  phone: string;
  interests?: string[];
}

export interface AuthState {
  isLoggedIn: boolean;
  user: UserProfile | null;
  hasCompletedOnboarding: boolean;
}
