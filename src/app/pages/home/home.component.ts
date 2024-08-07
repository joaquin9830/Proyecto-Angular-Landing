import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { BannerComponent } from "../../components/banner/banner.component";
import { AboutComponent } from '../../components/about/about.component';
import { ServicesSectionComponent } from "../../components/services-section/services-section.component";
import { StockComponent } from "../../components/stock/stock.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, BannerComponent, AboutComponent, ServicesSectionComponent, StockComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
