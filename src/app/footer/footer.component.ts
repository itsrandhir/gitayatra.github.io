import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  darkOrLight: string = 'dark_mode'; 
  toggleLightMode(): void{
    
    if(localStorage.getItem('darkmode') ==  null || localStorage.getItem('darkmode') == '0'){
      localStorage.setItem('darkmode', '1');
      const classess = document.querySelectorAll('.revert-dark-mode');
      classess.forEach(classes => {
        classes.classList.remove('revert-dark-mode');
        classes.classList.add('dark-mode');
      } );
      const dyn_clas =  document.querySelector('.toggle-dark-mode');
      dyn_clas?.classList.add('dark-mode');
       this.darkOrLight = 'light_mode';
    }else{
      localStorage.setItem('darkmode', '0');
      const classess = document.querySelectorAll('.dark-mode');
      classess.forEach(classes => {
        classes.classList.remove('dark-mode');
        classes.classList.add('revert-dark-mode');
      } )
      const dyn_clas =  document.querySelector('.toggle-dark-mode');
      dyn_clas?.classList.remove('dark-mode');
      this.darkOrLight = 'dark_mode';
    }
  }
  isDarkmode = localStorage.getItem('darkmode') ? localStorage.getItem('darkmode') : '1';
  ngOnInit(): void {
    const isDarkmode = localStorage.getItem('darkmode') ? localStorage.getItem('darkmode') : '1';
    if(isDarkmode == '1'){
      const classess = document.querySelectorAll('.revert-dark-mode');
      classess.forEach(classes => {
        classes.classList.remove('revert-dark-mode');
        classes.classList.add('dark-mode');
      } );
      this.darkOrLight = 'light_mode';
    }else{
      const classess = document.querySelectorAll('.dark-mode');
      classess.forEach(classes => {
        classes.classList.remove('dark-mode');
        classes.classList.add('revert-dark-mode');
      } )
      this.darkOrLight = 'dark_mode';
    }
  }
}
