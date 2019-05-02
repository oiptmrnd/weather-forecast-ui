import { Component, OnInit, Input } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { FormControl } from "@angular/forms";
import { DateTime } from 'luxon';
import { Lightbox } from "ngx-lightbox";
import {WeatherService} from "../services/weather/weather.service"
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  searchWord: any;

  data:any[];
  errMessage: string = "";

  icon: any;
  imageSource: any = [];

  loadingVisible = false;
  nrSelectState: any;
  nrSelectTown: any;
  states: any;
  towns: any;
  date1:any;
  date2:any;
  nextDay:any;
  firstDay: any;
  processedData:any=[];
  date7: Date;
  constructor(
    private spinner: NgxSpinnerService,
    private _lightbox: Lightbox,
    private weather: WeatherService
  ) {}

  ngOnInit() {
    this.loadingVisible = true;
    this.setData();
  }

  setData(){
    let tempDay;
    let tempMonth;
    this.date1 = new Date();
    this.date7 = new Date();

    tempDay = this.date7.setDate(this.date7.getDate() + 7);
    let month2 = new Date(tempDay);
    this.nextDay = new Date(tempDay).getDate();

    this.date2 = this.date1.getFullYear() +
      "-" +
      (month2.getMonth()+1) +
      "-" +
     this.nextDay;
    this.date1 =
      this.date1.getFullYear() +
      "-" +
      (this.date1.getMonth()+1) +
      "-" +
      this.date1.getDate();
console.log(this.date1, this.date2);

    this.imageSource.push(
      {
        src: "http://oip-dashboard.apps.cp.tmrnd.com.my/satellite",
        thumb: "http://oip-dashboard.apps.cp.tmrnd.com.my/satellite"
      },
      {
        src: "http://oip-dashboard.apps.cp.tmrnd.com.my/swirl",
        thumb: "http://oip-dashboard.apps.cp.tmrnd.com.my/swirl"
      },
      {
        src: "http://oip-dashboard.apps.cp.tmrnd.com.my/radar",
        thumb: "http://oip-dashboard.apps.cp.tmrnd.com.my/radar"
      }
    );

    this.states = [
      { key: "1", val: "JOHOR" },
      { key: "2", val: "KEDAH" },
      { key: "3", val: "KELANTAN" },
      { key: "4", val: "KUALA LUMPUR" },
      { key: "4", val: "LABUAN" },
      { key: "5", val: "LABUAN" },
      { key: "6", val: "MELAKA" },
      { key: "7", val: "NEGERI SEMBILAN" },
      { key: "8", val: "PAHANG" },
      { key: "9", val: "PULAU PINANG" },
      { key: "10", val: "PERAK" },
      { key: "11", val: "PERLIS" },
      { key: "12", val: "PUTRAJAYA" },
      { key: "13", val: "SABAH" },
      { key: "14", val: "SARAWAK" },
      { key: "15", val: "SELANGOR" },
    ];

    this.nrSelectState = null;
    this.nrSelectTown = null;

  }

  onChange(ev): void {
    if (ev.target.value === "1") {
      this.towns = [
        { key: "1", val: "Overall" },
        { key: "128", val: "Pagoh" },
        { key: "127", val: "Muar" },
        { key: "126", val: "Tangkak" },
        { key: "125", val: "Labis" },
        { key: "124", val: "Johor Bharu" },
        { key: "122", val: "Ayer Hitam" },
        { key: "439", val: "Kulai" },
        { key: "135", val: "Segamat" },
        { key: "123", val: "Batu Pahat" },
        { key: "133", val: "Pasir Gudang" }

      ];
    } else if (ev.target.value === "2") {

       this.towns = [
         { key: "2", val: "Overall" },
         { key: "140", val: "Baling" },
         { key: "141", val: "Jitra" },
         { key: "142", val: "Kuala Nerang" },
         { key: "426", val: "Serdang" },
         { key: "144", val: "Langkawi" },
         { key: "143", val: "Kulim" },
         { key: "145", val: "Pendang" },
         { key: "148", val: "Sg Petani" },
       ];
    } else if (ev.target.value === "3") {

       this.towns = [
         { key: "3", val: "Overall" },
         { key: "153", val: "Kota Bharu" },
         { key: "150", val: "Bachok" },
         { key: "151", val: "Gua Musang" },
         { key: "152", val: "Jeli" },
         { key: "154", val: "Kuala Krai" },
         { key: "155", val: "Lojing" },
         { key: "156", val: "Machang" },
         { key: "158", val: "Pasir Puteh" },
       ];
    } else if (ev.target.value === "4") {

       this.towns = [
         { key: "4", val: "Overall" },
         { key: "168", val: "Selayang" },
         { key: "169", val: "Setapak" },
         { key: "170", val: "Sg Besi" },
         { key: "165", val: "Cheras" },
         { key: "164", val: "Bukit Bintang" },
         { key: "163", val: "Bangsar" },
         { key: "162", val: "Ampang" }
       ];
    } else if (ev.target.value === "5") {

       this.towns = [
         { key: "5", val: "Overall" },
         { key: "628", val: "labuan" }
       ];
    } else if (ev.target.value === "6") {

       this.towns = [
         { key: "6", val: "Overall" },
         { key: "179", val: "Tangga Batu" },
         { key: "172", val: "Alor Gajah" },
         { key: "173", val: "Ayer Keroh" },
         { key: "174", val: "Bandaraya Melaka" },
         { key: "175", val: "Durian Tunggal" },
         { key: "176", val: "Jasin" },
         { key: "178", val: "Merlimau" },
         { key: "177", val: "Masjid Tanah" }
       ];
    } else if (ev.target.value === "7") {

       this.towns = [
         { key: "7", val: "Overall" },
         { key: "188", val: "Seremban" },
         { key: "180", val: "Gemas" },
         { key: "181", val: "Jelebu" },
         { key: "182", val: "Jempol" },
         { key: "183", val: "Kuala Klawang" },
         { key: "184", val: "Kuala Pilah" },
         { key: "185", val: "Nilai" },
         { key: "186", val: "Port Dickson" }
       ];


    } else if (ev.target.value === "8") {

      this.towns = [
        { key: "8", val: "Overall" },
        { key: "202", val: "Triang" },
        { key: "199", val: "Pekan" },
        { key: "200", val: "Raub" },
        { key: "197", val: "Mentakab" },
        { key: "190", val: "Bentong" },
        { key: "191", val: "Bera" },
        { key: "192", val: "Jerantut" },
        { key: "194", val: "Kuantan" }
      ];

    } else if (ev.target.value === "9") {

      this.towns = [
        { key: "9", val: "Overall" },
        { key: "210", val: "George Town" },
        { key: "203", val: "Ayer Itam" },
        { key: "204", val: "Balik Pulau" },
        { key: "205", val: "-Bayan Lepas" },
        { key: "206", val: "Batu Kawan" },
        { key: "207", val: "Butterworth" },
        { key: "208", val: "Bukit Mertajam" },
        { key: "212", val: "Nibong Tebal" }
      ];

    } else if (ev.target.value === "10") {

      this.towns = [
        { key: "10", val: "Overall" },
        { key: "212", val: "Lenggong" },
        { key: "224", val: "Selama" },
        { key: "225", val: "Sg Siput" },
        { key: "227", val: "Taiping" },
        { key: "228", val: "Tapah" },
        { key: "229", val: "Tanjung Malim" },
        { key: "230", val: "Teluk Intan" },
        { key: "219", val: "Ipoh" }
      ];

    }else if (ev.target.value === "11") {

      this.towns = [
        { key: "11", val: "Overall" },
        { key: "236", val: "Padang Besar" },
        { key: "233", val: "Beseri" },
        { key: "234", val: "Chuping" },
        { key: "232", val: "Arau" }

      ];

    }else if (ev.target.value === "12") {

      this.towns = [
        { key: "12", val: "Overall" },
        { key: "237", val: "Putrajaya" }


      ];

    }else if (ev.target.value === "13") {

      this.towns = [
        { key: "13", val: "Overall" },
        { key: "606", val: "Kota Kinabalu" },
        { key: "607", val: "Sandakan" },
        { key: "608", val: "Tawau" },
        { key: "609", val: "Kudai" },
        { key: "610", val: "Semporna" },
        { key: "611", val: "Tenom" },
        { key: "612", val: "Papar" },
        { key: "613", val: "Beluran" }


      ];

    }else if (ev.target.value === "14") {

      this.towns = [
        { key: "14", val: "Overall" },
        { key: "634", val: "Tebedu" },
        { key: "263", val: "Kanowit" },
        { key: "266", val: "Kuching" },
        { key: "267", val: "Limbang" },
        { key: "265", val: "Kota Samarahan" },
        { key: "264", val: "Kapit" },
        { key: "642", val: "Daro" },
        { key: "262", val: "Bintulu" }


      ];

    }else if (ev.target.value === "15") {

      this.towns = [
        { key: "15", val: "Overall" },
        { key: "298", val: "Sepang" },
        { key: "299", val: "Seri Kembangan" },
        { key: "300", val: "Subang Jaya" },
        { key: "288", val: "Kajang" },
        { key: "290", val: "Kuala Selangor" },
        { key: "291", val: "Rawang" },
        { key: "286", val: "Cyberjaya" },
        { key: "293", val: "Petaling Jaya" }

      ];

    }

    else{

      this.nrSelectState=null;
    }

  }

  onChangeTown():void{
    this.spinner.show();
    console.log(this.nrSelectTown);
    if(this.nrSelectTown){

      this.weather.weatherData(this.nrSelectTown,this.date1,this.date2)
        .then(result => {
          console.log(result);
          this.data=result.results;
          this.processData(this.data);

        })
        .catch(err => {
          this.spinner.hide();
         this.errMessage=err.message;
         console.log(err);
        });


    }
  }


  open(): void {
    // open lightbox

    this._lightbox.open(this.imageSource, 1);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }


  processData(data: any[]) : void {
    console.log(data);
    for(const item of data) {
      const index = this.processDate(item.date);
      if(!this.processedData[index]) this.processedData[index] = [];
      if (item.datatype == 'FGM') this.processedData[index][0] = item;
      if (item.datatype == 'FGA') this.processedData[index][1] = item;
      if (item.datatype == 'FGN') this.processedData[index][2] = item;
      if (item.datatype == "FMINT") this.processedData[index][3] = item;
      if (item.datatype == "FMAXT") this.processedData[index][4] = item;
      if (item.datatype == "FSIGW") this.processedData[index][5] = item;


    }

    this.spinner.hide();

    console.log(this.processedData);
  }


  processDate(date: string) : number {
    if (new Date(date).toLocaleDateString() == new Date().toLocaleDateString()) { return 0;}
    else if (new Date(date).getDate() != new Date().getDate() ) {
      let temp = new Date(new Date(date).getTime() - new Date().getTime());
      let day: number = new Date(date).getDate();
      let month: number = new Date(date).getMonth()+1;
      let year: number = new Date(date).getFullYear();
      let diff;


      diff = DateTime.local().diff(DateTime.local(year, month, day), 'days').days;
      console.log(day + '-' + month + '-' +year);
      diff = Math.floor(diff)*-1;

      return diff;

    }


  }

  getWeatherClass(w: string,type:string) : string {

    if(w=='No rain'&&(type=="FGM"||type=="FGA")) return 'clear day';
    if(w=='No rain'&&(type=="FGN")) return 'clear night';
    if (w.includes('Rain') && w != "No rain" || w.includes(' rain')) return 'rain';
    if (w.includes('Thunderstorms') || w.includes(' thunderstorms')) return 'wind';

  }

  getWeatherDay(w:string):any {


    if (new Date(w).getDay()=== 0) return { long:'Sunday',short:'Sun'};
    if (new Date(w).getDay() === 1) return { long: 'Monday', short: 'Mon' };
    if (new Date(w).getDay() === 2) return { long: 'Tuesday', short: 'Tue' };
    if (new Date(w).getDay() === 3) return { long: 'Wednesday', short: 'Wed' };
    if (new Date(w).getDay() === 4) return { long: 'Thursday', short: 'Thu' };
    if (new Date(w).getDay() === 5) return { long: 'Friday', short: 'Fri' };
    if (new Date(w).getDay() === 6) return { long: 'Saturday', short: 'Sat' };
  }
}
