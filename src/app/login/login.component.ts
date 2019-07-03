import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CorrespondenciaService} from '../service/correspondencia.service';
import {Login} from '../model/login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any;
  resetForm: any;
  usuario: string;
  password: string;
  email: string;
  loading: boolean = false;
  public respuesta;

  data: any = {};

  loginForm: FormGroup;

  public loginUser: Login;
  /*loginForm;

  loginForm = new FormGroup({
    usr: new FormControl('', Validators.required),
    pwd: new FormControl('', Validators.required)
  });*/

  /*  usr=new FormControl('',Validators.required);
    pwd=new FormControl('',Validators.required);*/

  constructor(private router: Router, private formBuilder: FormBuilder,
              private service: CorrespondenciaService) {


// this.logForm = this.formBuilder.group({
//       'usuario': ['', Validators.required],
//       'password': ['', Validators.required]
//     });*/
  }

  ngOnInit() {
    // this.form = new FormControl({
    //   usr: new FormControl('', Validators.required),
    //   pwd: new FormControl('', Validators.required)
    // });
    /* this.loginForm = new FormControl();
     this.loginForm = this.formBuilder.group({
       /!*usr: ('', [Validators.required, Validators.maxLength(20)]),
       pwd: ('', [Validators.required, Validators.maxLength(20)])*!/
     });*/
  }

  /*get usr() {
    return this.loginForm.get('usr');
  }*/

  public login(form) {

    console.log('Login form Invalid', form.invalid);
    console.log('Login form Valid', form.valid);
    console.log('Login form Submitted', form.submitted);
    console.log('Valor 1:' + this.data.username);
    console.log('Valor 2:' + this.data.password);
    if (this.validForm(form)) {
      this.service.validaUsuario(this.data).subscribe(response => {

          console.log('Usuario:' + JSON.stringify(response));
          if (response.status === 'success') {
            this.loading = true;
            console.info(' JsonLogin:.. 2', JSON.stringify(response));

            this.loginUser = response;
            console.log('Usuario:' + JSON.stringify(this.loginUser));
            /*
                    console.log("*****Usuario*****:"+this.loginUser.usuario);
                    localStorage.setItem('id', response.usuario.ausrId);
                    console.log("*****Usuario2*****:"+response.usuario);
                    value=JSON.stringify(this.loginUser);
                    sessionStorage.setItem("app-login", value);*/
            // console.log("Valor:"+this.loginUser.usuario.ausrId);
            localStorage.setItem('id', this.loginUser.usuario.ausrId.toString());
            let value = JSON.stringify(this.loginUser);
            sessionStorage.setItem('app-login', value);
            let link = ['/home'];
            if (response.status === 'success') {
              this.router.navigate(link);
            } else {
              link = ['/login'];
              this.router.navigate(link);
            }
            this.loading = false;
          }
        },
        error => {
          alert('Usuario no encontrado');
        });


    }
  }

  validForm(f): boolean {
    if (f.valid) {
      return true;
    } else {
      return false;
    }
  }

  onSubmit() {
    alert(JSON.stringify(this.data));
  }
}
