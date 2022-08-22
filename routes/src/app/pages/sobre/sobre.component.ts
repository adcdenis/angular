import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {

  constructor(private actRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {

    console.log('iniciando rotas...');

    this.actRoute.params.subscribe(
      res => console.log(res?.['id'], res?.['username'], res)
    )

    this.actRoute.queryParams.subscribe(
      res => console.log(res?.['email'], res)
    )

      // setInterval(
      //   ()=> {
      //     this.router.navigate(['404']);
      //     //this.router.navigateByUrl('/404');

      //   }, 10000
      // )



  };

  //http://localhost:4200/sobre/5/can?email=adcdenis@gmail.com

}
