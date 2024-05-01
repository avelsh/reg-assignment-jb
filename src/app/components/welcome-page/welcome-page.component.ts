import { Component } from '@angular/core';

@Component({
  selector: 'jb-welcome',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent {

  downloadPdf(fileName: string = 'CV_Velsh.pdf'): void {
    const filePath = `/assets/${fileName}`;
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', filePath);
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}