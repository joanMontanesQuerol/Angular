import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, catchError, filter } from 'rxjs';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-new-hero-page',
  templateUrl: './new-hero-page.component.html',
  styles: ``
})
export class NewHeroPageComponent implements OnInit{

  heroForm = new FormGroup({
    id: new FormControl<string>(''),
    superhero: new FormControl<string>(''),
    alter_ego: new FormControl<string>(''),
    first_appearance: new FormControl<string>(''),
    characters: new FormControl<string>(''),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alt_image: new FormControl<string>(''),
  });

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];

  constructor(
    private heroService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
  ){}

  ngOnInit(): void {

    if (!this.router.url.includes('edit')) return;
    this.activatedRoute.params
    .pipe(
        switchMap(({id}) => this.heroService.getHeroById(id))
    ).subscribe(hero => {
      if(!hero ) return;
      this.heroForm.reset(hero);
      return;
    });




  }

  get currentHero():Hero{
    const hero = this.heroForm.value as Hero;
    return hero;
  }

  submitHero():void{
    if(this.heroForm.invalid) return;
    console.table(this.currentHero);

    if(this.currentHero.id){
      this.heroService.updateHero(this.currentHero)
        .subscribe(hero =>{
          this.showSnackbar(`${hero.superhero} updated`)
        })
      return;
    }

    this.heroService.addHero(this.currentHero)
      .subscribe(hero => {
        this.showSnackbar(`${hero.superhero} created`)
      })

  }

  deleteHero(){
    if ( !this.currentHero.id ) throw Error('Hero id is required');

    const dialogRef = this.dialog.open( ConfirmDialogComponent, {
      data: this.heroForm.value
    });

    dialogRef.afterClosed()
      .pipe(
        filter( (result: boolean) => result ),
        switchMap( () => this.heroService.deleteHeroById( this.currentHero.id )),
        filter( (wasDeleted: boolean) => wasDeleted ),
      )
      .subscribe(() => {
        this.router.navigate(['/heroes']);
      });
  }

showSnackbar(message: string): void{
  this.snackBar.open(message, 'done', {
    duration: 2500
  })
}

}
