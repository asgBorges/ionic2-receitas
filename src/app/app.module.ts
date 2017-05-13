import { AutenticacaoService } from './../services/autenticacao.service';
import { RegistroPage } from './../pages/registro/registro';
import { SigninPage } from './../pages/signin/signin';
import { ReceitaService } from './../services/receita.service';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { ListaComprasPage } from './../pages/lista-compras/lista-compras';
import { ReceitasPage } from './../pages/receitas/receitas';
import { ReceitaPage } from './../pages/receita/receita';
import { EditaReceitaPage } from './../pages/edita-receita/edita-receita';
import { ListaComprasService } from "../services/lista-compras.service";
import { MensagemService } from "../services/mensagem.service";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ListaComprasPage,
    ReceitasPage,
    ReceitaPage,
    EditaReceitaPage,
    SigninPage,
    RegistroPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ListaComprasPage,
    ReceitasPage,
    ReceitaPage,
    EditaReceitaPage,
    SigninPage,
    RegistroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ListaComprasService,
    ReceitaService,
    MensagemService,
    AutenticacaoService
  ]
})
export class AppModule {}
