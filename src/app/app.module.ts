import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { DialogAddUserComponent } from './dialog-add-user/dialog-add-user.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
// import { getAuth, provideAuth } from '@angular/fire/auth';
import { ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
// import { getDatabase, provideDatabase } from '@angular/fire/database';
// import { getFunctions, provideFunctions } from '@angular/fire/functions';
// import { getMessaging, provideMessaging } from '@angular/fire/messaging';
// import { getPerformance, providePerformance } from '@angular/fire/performance';
// import { getStorage, provideStorage } from '@angular/fire/storage';
// import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';





@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    DialogAddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyAPqI-9ZnQStXEeNCQ-KIVnNHG6hXOAXco",
      authDomain: "simple-crm-4bb6f.firebaseapp.com",
      projectId: "simple-crm-4bb6f",
      storageBucket: "simple-crm-4bb6f.appspot.com",
      messagingSenderId: "547697812735",
      appId: "1:547697812735:web:1ce796d606054c652b58ca"
    })),
    provideFirestore(() => getFirestore()),
    // provideAuth(() => getAuth()),
    // provideAnalytics(() => getAnalytics()),
    // // provideAppCheck(() => {
    // //   // TODO get a reCAPTCHA Enterprise here https://console.cloud.google.com/security/recaptcha?project=_
    // //   const provider = new ReCaptchaEnterpriseProvider(/* reCAPTCHA Enterprise site key */);
    // //   return initializeAppCheck(undefined, { provider, isTokenAutoRefreshEnabled: true });
    // // }),
    // provideFirestore(() => getFirestore()),
    // provideDatabase(() => getDatabase()),
    // provideFunctions(() => getFunctions()),
    // provideMessaging(() => getMessaging()),
    // providePerformance(() => getPerformance()),
    // provideStorage(() => getStorage()),
    // provideRemoteConfig(() => getRemoteConfig())
  ],
  providers: [
    ScreenTrackingService,
    UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
