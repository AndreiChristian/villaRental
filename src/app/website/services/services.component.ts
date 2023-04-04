import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserState } from '../store/user/user.state';
import { Store } from '@ngrx/store';
import { getUser } from '../store/user/user.selectors';
import { state } from '@angular/animations';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  user$: Observable<UserState>;

  constructor(private store: Store<{ user: UserState }>) {}

  ngOnInit(): void {
    this.store.select(getUser).subscribe((data) => {
      console.log(data);
    });
  }
}
