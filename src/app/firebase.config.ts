import { importProvidersFrom } from "@angular/core";
import { EnvironmentProviders } from "@ngrx/store";
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';

const firebaseProviders: EnvironmentProviders = importProvidersFrom([
  provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
]);

export{firebaseProviders}
