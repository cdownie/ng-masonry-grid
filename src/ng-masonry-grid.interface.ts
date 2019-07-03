import { Observable } from 'rxjs';

/**
 * Masonry Grid item
 */
export class MasonryGridItem {
  element?: any; // Grid item DOM element itself
  index?: number; // Grid item data-count attribute static order index inside ng-masonry-grid container
}

/**
 * Masonry Options
 */
export interface MasonryOptions {
  // layout
  itemSelector?: string;
  columnWidth?: any;
  percentPosition?: boolean;
  gutter?: any;
  stamp?: string;
  fitWidth?: boolean;
  originLeft?: boolean;
  originTop?: boolean;
  addStatus?: string;
  horizontalOrder?: boolean;

  // setup
  containerStyle?: {};
  transitionDuration?: any;
  resize?: boolean;
  initLayout?: boolean;
}

/**
 * Masonry Object
 */
export class Masonry {
  items?: any[];

  constructor(selector: string | Element, options?: MasonryOptions) {};

  masonry?(): void;

  masonry?(eventName: string, listener: any): void;

  // layout
  layout?(): void;

  layoutItems?(items: any[], isStill?: boolean): void;

  stamp?(elements: any[]): void;

  unstamp?(elements: any[]): void;

  // add and remove items
  appended?(elements: any[]): void;

  prepended?(elements: any[]): void;

  addItems?(elements: any[]): void;

  remove?(elements: any[]): void;

  // events
  on?(eventName: string, listener: any): void;

  off?(eventName: string, listener: any): void;

  once?(eventName: string, listener: any): void;

  // utilities
  reloadItems?(): void;

  reOrderItems?(): void;

  destroy?(): void;

  getItemElements?(): any[];

  data?(element: Element): Masonry;

  removeAnimation?(): void;

  setAddStatus?(value: string): void;

  removeItem?(item: Element): Observable<MasonryGridItem>;

  removeFirstItem?(): Observable<MasonryGridItem>;

  removeAllItems?(): Observable<MasonryGridItem>;
}

/**
 * Scroll Animation options
 */
export interface AnimationOptions {
  animationEffect?: string,
  minDuration?: number;
  maxDuration?: number;
  viewportFactor?: number;
}

// Type definitions for imagesLoaded 4.1.1
// Project: https://github.com/desandro/imagesloaded

export type ElementSelector = Element | NodeList | Array<Element> | string;

/** interface for an image currently loading or completed */
export interface LoadingImage {
  img: HTMLImageElement;
  isLoaded: boolean;
}

export interface ImagesLoadedCallback {
  (instance?: ImagesLoaded): void;
}

export interface ImagesLoadedListener {
  (instance: ImagesLoaded, image?: LoadingImage): void;
}

export interface ImagesLoaded {
  images: Array<LoadingImage>;

  new(elem: ElementSelector, callback: ImagesLoadedCallback): ImagesLoaded;

  // event listeners
  on(event: string, listener: ImagesLoadedListener): void;

  off(event: string, listener: ImagesLoadedListener): void;

  once(event: string, listener: ImagesLoadedListener): void;
}

export interface ImagesLoadedOptions {
  background: true | string;
}

export interface ImagesLoadedConstructor {
  /**
   * Creates a new ImagesLoaded object with the provided callback
   * @param elem Element, NodeList, Element array, or selector string for images to watch
   * @param options object that can tell imagesloaded to watch background images as well
   * @param callback function triggered after all images have been loaded
   */
  (
    elem: ElementSelector,
    options: ImagesLoadedOptions,
    callback?: ImagesLoadedCallback
  ): ImagesLoaded;

  (elem: ElementSelector, callback?: ImagesLoadedCallback): ImagesLoaded;
}


