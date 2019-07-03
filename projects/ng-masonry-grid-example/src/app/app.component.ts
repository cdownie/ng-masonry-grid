import { Component, OnDestroy } from '@angular/core';
import { Masonry, MasonryGridItem } from 'ng-masonry-grid';
import { SubscriptionLike as ISubscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './ng-masonry-grid.css',
    './app.component.css'
  ] // point to ng masonry grid css
})
export class AppComponent implements OnDestroy {

  _masonry: Masonry;
  buttons: Array<any> = [];
  count = 0;
  showMasonry = true;
  animOptions = { animationEffect: 'effect-1' };
  masonryItems: Array<any> = [];
  private _removeAllSubscription: ISubscription;
  private _removeItemSubscription: ISubscription;
  private _removeFirstItemSubscription: ISubscription;

  constructor() {
    this.buttons = [
      { index: 1, active: true },
      { index: 2, active: false },
      { index: 3, active: false },
      { index: 4, active: false },
      { index: 5, active: false },
      { index: 6, active: false },
      { index: 7, active: false },
      { index: 8, active: false }
    ];

    const len = 10; // length of grid items

    for (let i = 0; i < len; i++) {
      this.masonryItems.push({ src: this.getSrc(), count: this.count++ });
    }
  }

  ngOnDestroy() {
    if (this._masonry) {
      this._removeAllSubscription.unsubscribe();
      this._removeItemSubscription.unsubscribe();
      this._removeFirstItemSubscription.unsubscribe();
    }
  }

  onSelect(item: any) {
    this.showMasonry = false;
    this.buttons.forEach((i) => i.active = false);
    item.active = true;
    this.animOptions = { animationEffect: 'effect-' + item.index };
    this._masonry.setAddStatus('append');
    setTimeout(() => this.showMasonry = true, 100);
  }

  getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * max + min);
  }

  getSrc() {
    // const width = this.getRandomInt( 300, 400 );
    // const height = this.getRandomInt( 300, 500 );
    // return 'http://lorempixel.com/'  + width + '/' + height + '/nature';

    return '../assets/images/' + this.getRandomInt(1, 15) + '.jpg';
  }

  onNgMasonryInit($event: Masonry) {
    console.log($event);
    this._masonry = $event;
  }

  // done without images
  removeItem(item: any) {
    if (this._masonry) {
      const elem = document.querySelector('#' + item);
      this._removeItemSubscription = this._masonry.removeItem(elem)
        .subscribe((item: MasonryGridItem) => {
          if (item) {
            let id = item.element.getAttribute('id');
            let index = id.split('-')[2];
            this.masonryItems.splice(index, 1);
          }
        });
    }
  }

  prependItems() {
    let src = [{ src: this.getSrc(), count: this.count++ }, { src: this.getSrc(), count: this.count++ },
      { src: this.getSrc(), count: this.count++ }];
    this._masonry.setAddStatus('prepend');
    this.masonryItems.splice(0, 0, ...src);
  }

  // append items to existing masonry
  appendItems() {
    let src = [{ src: this.getSrc(), count: this.count++ }, { src: this.getSrc(), count: this.count++ },
      { src: this.getSrc(), count: this.count++ }];
    this._masonry.setAddStatus('append');
    this.masonryItems.push(...src);
  }

  addItems() {
    let src = [{ src: this.getSrc(), count: this.count++ }, { src: this.getSrc(), count: this.count++ },
      { src: this.getSrc(), count: this.count++ }];
    this._masonry.setAddStatus('add');
    this.masonryItems.push(...src);
  }

  removeFirstItem() {
    if (this._masonry) {
      this._removeFirstItemSubscription = this._masonry.removeFirstItem()
        .subscribe((item: MasonryGridItem) => {
          if (item) {
            const id = item.element.getAttribute('id');
            const index = id.split('-')[2];
            this.masonryItems.splice(index, 1);
          }
        });
    }
  }

  // remove all items
  removeAllItems() {
    if (this._masonry) {
      this._removeAllSubscription =
        this._masonry.removeAllItems()
          .subscribe((items: MasonryGridItem) => {
            // remove item from the list
            this.masonryItems = [];
          });
    }
  }

  // reorder items to original position
  reorderItems() {
    if (this._masonry) {
      this._masonry.reOrderItems();
    }
  }
}
