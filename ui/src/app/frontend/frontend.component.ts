import { Component, ElementRef, OnInit, HostListener, Renderer2, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.css'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('5s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('5s', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class FrontendComponent implements OnInit {
  isShown: boolean = true;
  @ViewChild("navbar") elementView: ElementRef;

  imageData: Object[] = [
    { img: 'http://flomont.in/wp-content/uploads/2015/09/slider2.jpg', alt: 'Welcome', heading: 'Welcome', text: 'We Build Future Here' },
    { img: 'http://www.kingslearningchristianacademy.com/wp-content/uploads/2017/09/slider1.jpg', alt: 'Creativity', heading: 'Creativity', text: 'Play and Learn' },
    { img: 'https://images2.alphacoders.com/720/720843.jpg', alt: 'Teaching', heading: 'Teaching', text: 'Learn Something Big' },
    { img: 'https://images2.alphacoders.com/720/720843.jpg', alt: 'Enviornment', heading: 'Enviornment', text: 'Fun Everywhere' }
  ];

  featuresData: Object[] = [
    { img: 'assets/icons/teaching.png', heading: 'Smart Education', info: 'We Teach Students Smart way' },

    { img: 'assets/icons/abacus.png', heading: 'Games And More', info: 'we believe in play and learn ' },
    { img: 'assets/icons/teacher.png', heading: 'Professional Staff', info: 'We Have Top Teachers From Diffrent States Of india' },
    { img: 'assets/icons/school-bus.png', heading: 'Tansportation', info: 'We Have Transportation Facility For Students' },
    { img: 'assets/icons/hotel.png', heading: 'Hostel Facility', info: 'We provide Hostel Facility dsajdhj' },
    { img: 'assets/icons/computer.png', heading: 'Digital Teaching', info: 'We teach Students Through New Digital Ways' },



  ];

  teachersData: Object[] = [
    { img: 'https://avatars3.githubusercontent.com/u/25137297?s=400&u=bb73ea02096fc57a67136d041658606300da465f&v=4', name: 'Shubham Digole', profile: 'Web developer', description: 'fdsfdsfd' },
    { img: 'https://avatars3.githubusercontent.com/u/25137297?s=400&u=bb73ea02096fc57a67136d041658606300da465f&v=4', name: 'Shubham Digole', profile: 'Web developer', description: 'fdsfdsfd' },
    { img: 'https://avatars3.githubusercontent.com/u/25137297?s=400&u=bb73ea02096fc57a67136d041658606300da465f&v=4', name: 'Shubham Digole', profile: 'Web developer', description: 'fdsfdsfd' },
    { img: 'https://avatars3.githubusercontent.com/u/25137297?s=400&u=bb73ea02096fc57a67136d041658606300da465f&v=4', name: 'Shubham Digole', profile: 'Web developer', description: 'fdsfdsfd' },
  ];

  feedback: Object[] = [
    { img: 'assets/feedback.PNG', name: 'shubham digole', heading: 'Awesome School', Brief: 'This School is Awesome' },
    { img: 'assets/feedback.PNG', name: 'shubham digole', heading: 'Awesome School', Brief: 'This School is Awesome' },
    { img: 'assets/feedback.PNG', name: 'shubham digole', heading: 'Good Enviornment', Brief: 'This School is too good for childrens' },
    { img: 'assets/feedback.PNG', name: 'shubham digole', heading: 'Awesome School', Brief: 'This School is Awesome' },
  ]
  buttonDisabled: boolean = true;


  constructor(public dialog: MatDialog, private renderer: Renderer2) {}
  prop: string = 'none';

  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  @HostListener('window:scroll', ['$event'])
  scrollHandler(event) {
    console.debug("Scroll Event");
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(popup, {
      width: '500px'}).afterClosed().subscribe(result => {
      this.buttonDisabled = true;
    });
    console.log("dailog clicked");
    this.buttonDisabled = false;
  }


  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true); //third parameter
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

  scroll = (): void => {
    let topHeight= this.elementView.nativeElement.offsetTop;
    
    if (window.pageYOffset > topHeight) {
      this.renderer.addClass(this.elementView.nativeElement, 'fixed-top');
    } else {
      this.renderer.removeClass(this.elementView.nativeElement, 'fixed-top');
    }

    console.log(window.pageYOffset);
  };

}

@Component({
  selector: 'popup',
  templateUrl: './dialog.html',
  styleUrls: ['./dialog.css']
})
export class popup {

  constructor(
    public dialogRef: MatDialogRef<popup>
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}