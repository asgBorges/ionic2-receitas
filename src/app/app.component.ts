import firebase from 'firebase';
import { AutenticacaoService } from './../services/autenticacao.service';
import { RegistroPage } from './../pages/registro/registro';
import { SigninPage } from './../pages/signin/signin';
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from "../pages/tabs/tabs";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  isAuthenticated: boolean;
  tabsPage = TabsPage;
  signinPage = SigninPage;
  registroPage = RegistroPage;
  @ViewChild('nav') nav: NavController;

  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    private menuCtrl: MenuController, 
    private autenticacaoService: AutenticacaoService) {

    firebase.initializeApp({
      apiKey: "AIzaSyDb9PtVhoayg9ZYDFtmDDqG2Apmqy_IFRI",
      authDomain: "receitas-1e25a.firebaseapp.com",
      databaseURL: "https://receitas-1e25a.firebaseio.com",
      projectId: "receitas-1e25a",
      storageBucket: "receitas-1e25a.appspot.com",
      messagingSenderId: "1074645019654"
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.isAuthenticated=true;
        this.rootPage = TabsPage;
      } else {
        this.isAuthenticated=false;
        this.rootPage = SigninPage;
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  carrega(page: any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }
  logout() {
    this.autenticacaoService.logout();
    this.menuCtrl.close();
    this.nav.setRoot(SigninPage);
  }
}

