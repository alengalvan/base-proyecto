import { Component, HostListener, Input, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserIdleService } from 'angular-user-idle';
import { GeneralComponent } from 'src/app/comun/general-component/general.component';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent extends GeneralComponent implements OnInit, OnDestroy {

  @Input() titulo: string;
  @Input() subtitulo: string;
  @Input()
  nombreModulo: string;

  @ViewChild('tableModalSesion') tableModal: any;

  constructor(public router: Router,
    private userIdle: UserIdleService,
    private ruta: ActivatedRoute) {
    super(router);
    this.nombreModulo = 'Tipo de registro';
  }
  ngOnDestroy(): void {
    this.accountService.logout()
    console.log("destroy")
  }

  ngOnInit(): void {
    //Start watching for user inactivity.
    this.userIdle.startWatching();

    // Start watching when user idle is starting.
    this.userIdle.onTimerStart().subscribe(() => this.openModal());

    // Start watch when time is up.
    this.userIdle.onTimeout().subscribe(() => this.salirSesion());
    /*this.ruta.queryParams
    .subscribe(params => {
      console.log('url params', params)
      this.accountService.agregaUsuarioExterno(params.token);
    }
  );*/

  }

  stop() {
    this.userIdle.stopTimer();
  }

  stopWatching() {
    this.userIdle.stopWatching();
  }

  startWatching() {
    this.userIdle.startWatching();
  }

  restart() {
    this.userIdle.resetTimer();
  }

  /*@HostListener('window:message', ['$event'])
  onMessage(e) {
    console.log('post message',e)
    /*if (e.origin != "http://localhost:4200") {
      return false;
    }/
    if (e.data.tipo == "token") {
      // this.agregarUsuario(JSON.stringify(data), this.getUserByToken(data));
      this.accountService.agregaUsuarioExterno(e.data.data);
      console.log('token extenro',this.accountService.userValue)
    }
  }*/

  salirSesion() {
    this.goToLogin()
    this.stop();
    this.stopWatching();
  }

  closeStopModal() {
    this.tableModal.nativeElement.className = 'modal hide-modal';
    this.stop();
    this.stopWatching();
    this.restart();
    this.startWatching();
  }

  openModal() {
    this.tableModal.nativeElement.className = 'modal show-modal';
  }

  closeModal() {
    this.tableModal.nativeElement.className = 'modal hide-modal';
  }
}
