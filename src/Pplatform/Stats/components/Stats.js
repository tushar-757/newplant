import React from 'react';
import {Line} from 'react-chartjs-2';
import icon from '../../../Assets/icon';
import '../SCSS/styles.css';
function Stats() {
    const data = {
        labels: ['25', '20', '15', '10'],
        datasets: [{
            label: 'CO2 concentration-400 ppm',
            data: [10.5, 12, 14, 14.6],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132)'
        }, {
            label: 'CO2 concentration-420 ppm',
            data: [5, 5.9, 7, 9],
            fill: false,
            backgroundColor: 'rgb(154, 162, 235)',
            borderColor: 'rgba(54, 162, 235)'
        }, {
            label: 'CO2 concentration-450 ppm',
            data: [2.8, 3, 3.8, 4.2],
            fill: false,
            backgroundColor: 'rgb(254, 162, 235)',
            borderColor: 'rgba(54, 262, 135)'
        }]
    };
    /* label: '# of Votes',
data: [12, 19, 3, 5, 2, 3],
fill: false,
backgroundColor: 'rgb(255, 99, 132)',
borderColor: 'rgba(255, 99, 132, 0.2)',*/

    const data2 = {
        labels: ['0hr', '1hrs', '2hrs', '3hrs', '4hrs', '5hrs'],
        datasets: [{
            label: "spider",
            data: [20.9, 20.9, 20.9, 20.82, 20.65, 20.6],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132)'
        }, {
            label: 'draceana',
            data: [20.9, 20.8, 20.8, 20.65, 20.65, 20.6],
            fill: false,
            backgroundColor: 'rgb(154, 162, 235)',
            borderColor: 'rgba(54, 162, 235)'
        }, {
            label: 'snake',
            data: [20.9, 20.85, 20.85, 20.9, 20.85, 20.87],
            fill: false,
            backgroundColor: 'rgb(254, 162, 235)',
            borderColor: 'rgba(54, 262, 135)'
        }]
    };
    const options1 = {
        scales: {
            yAxes: [{
                ticks: {
                    min: 20.5
                }
            }]
        }
    };
    const options = {
        scales: {
            yAxes: [{
                ticks: {
                    min: -5
                }
            }]
        }
    };
    return( 
       <div className= "Stats-Container">  
           <div className= "Stats-inner-cover">   
               <span  style= {{ fontSize: "25px",  fontWeight: "600" }}>
                    #Effect of Elevated CO2 and Low Temperature on Photosynthetic Potential of Indoor Plants"
               </span>
               <h2>
                    Absract
               </h2>
               <p>
                Several ornamental potted plant species have the ability to absorb pollutants and purify indoor air. The present study was aimed at to select best plant for pot transplantation in the cold areas of army installations. As diurnal variations in the temperature are high in these cold high altitude areas even in the indoor environment, plants were evaluated for their photosynthetic response under these conditions along with their oxygen releasing potential during light and dark conditions. Effect of temperature levels (10, 15, 20 and 25\xB0 C) and CO2 levels (400, 420 and 450 ppm) were studied on net photosynthesis and transpiration rate in three indoor plants viz., spider plant (Chlorophytum comosum), dracaena (Dracaena fragrans) and snake plant (Sansevieria trifasciata). Decrease in photosynthetic as well as transpiration rate of these indoor plants was recorded with decrease in temperature from ambient (25\xB0 C) to 10\xB0 C. At 10\xB0 C, photosynthetic rate of Dracaena reduced to 1/7th of ambient whereas in case of snake and spider plants it was near to half only. Even though snake plant maintained the good photosynthetic rate (~5 umol/m2 /s). Small increase in CO2 levels was not detrimental to photosynthetic efficiency of indoor plants even at temperatures lower than ambient. At 10\xB0 C, snake plant exhibited the maximum transpiration rate (0.163 mmol/m2 /s). Among the three tested plants, Snake plant exhibited better oxygen releasing potential during both light and dark period.
               </p>
               <h1>
                    INTRODUCTION
               </h1>
               <p>
                    In the present century, current CO2 levels are rising much rapidly than the expected rate which has attracted the attention of global community. Many studies have predicted an increase in the enhancement of carbon gain associated with elevated CO2 at higher temperatures [1-3] and in general predict better performance of crop in an environment having elevated CO2 combined with higher temperature due to global warming. Although crop specific response have also been reported showing better yield at lower temperatures under influence of higher carbon dioxide concentration [4]. Photosynthesis has long been recognized as one of the most temperature-sensitive processes in plants [3]. Photosynthesis is the primary process by which carbon enters the biosphere and by which plants sense rising CO2 [5]. Photosynthesis is particularly sensitive to thermal stress, with increased photo inhibition of PSII observed at temperature extremes [6]. Increases in atmospheric levels of CO2 above current levels can increase photosynthesis [1] even when plants were grown at temperature extremes [2]. Elevated CO2 has been reported to increase water-use efficiency through regulation of stomatal conductance and transpiration [7]. Since plants face environmental conditions simultaneously,interactive effect of temperature and CO2 on photosynthesis is of paramount importance and has been review by Morison and Lawlor [2]. Indoor air quality has become a major issue in recent years. Volatile organic compounds (VOCs) in indoor air have received appreciable attention due to their adverse health effects on humans [8]. An alternative way to reduce the level of VOCs in indoor air is the use of plants. Several ornamental potted plant species have the ability to absorb VOCs [9] and purify indoor air [10,11]. Plants also offer the advantage of providing psychological and social benefits for humans [12]. The aim of the study was to select best plant for pot transplantation in the cold areas of army barracks to improve the indoor air quality because barracks are heated through keroheaters which is leading to poor indoor air quality. Since carbon dioxide levels are also generally high due to closed environment and poor air exchange rate during winter due to closed windows, effect of elevated carbon dioxide was also studied along with temperature. As diurnal variations in the temperature are high in these cold high altitude areas even in the indoor environment, plants were evaluated for their photosynthetic efficiency and oxygen releasing potential under light and dark conditions. 
               </p>
               <h1>
                    Materials And Methods
               </h1>
               <p>
                    Experimental materials and growing conditions Fully grown potted-plants of three ornamental species were used in the present study. These were Dracaena fragrans (Dracaena), Chlorophytum comosum (Spider plant), Sansevieria trifasciata (Snake plant). All plants were exposed to four temperature regimes gradually from higher to lower (25\xB0 C, 20\xB0 C, 15\xB0 C and 10\xB0 C) and three CO2 levels (400, 420 and 450 ppm) for 07 days in plant growth chamber LT-105 (Percival Scientific Inc., Perry, Lowa, USA) equipped with cold fluorescent light (25 K lux). Photoperiod of the growth chamber was adjusted to 12/12 h (day/night) and 70% humidity for all the treatments. Each treatment consisted of three pots of each species. Net photosynthesis was estimated by using a portable leaf chamber analyser (LCA-4, ADC Bio Scientific Ltd., UK). Data were collected from the all plants. Three samples were collected from each plant and average was worked out. 
               </p>
               <h1>
                    Estimation of oxygen releasing potential
               </h1>
               <p>
                    To estimate the oxygen releasing potential, three selected potted plants viz., Dracaena fragrans (Dracaena), Chlorophytum comosum (Spider plant), Sansevieria trifasciata (Snake plant) were kept inside the leak proof air tight polythene bags of 150 gsm (Himedia) at ambient temperature. Mouth of the polythene was tide tightly with a provision of tubing to monitor the gas exchange with the help of multigas analyzer (GasAlertMicro5, BW Technologies by Honeywell, USA) as per schedule. Tubing was plugged suitably to avoid any leakage of gas. Plants were kept inside the polybags for 05 hrs with and without light to estimate the effect of light/dark conditions on oxygen releasing potential of these indoor plants. Dark conditions were created by covering the polythene bags with dark cotton cloth. Gas composition for oxygen content was checked on hourly basis. Plants selected were of uniform height and growth of one year age.
               </p>
               <h1>
                    RESULTS
               </h1>
               <h2>
                    Effect on photosynthesis and transpiration rate
               </h2>
               <p>
                    In the present experiment, results revealed that photosynthetic rates in all three plants decreased significantly as they were exposed to low temperature from ambient (Figure 1). This drop in photosynthetic rate was more pronounced for initial drop in temperature from 25 to 20\xB0 C and ranged from 50-58%. Whereas further decrease in temperature from 20 to 10\xB0 C resulted in to gradual decrease in photosynthetic rate except snake plant which exhibited higher photosynthetic rates compared to other two plants. Effect of higher CO2 concentrations (>400 ppm) followed the same trend as of 400 ppm. The results also revealed that photosynthetic rate was marginally better at the highest CO2 concentration (450 ppm) at ambient temperature but as the temperature dropped to 10\xB0 C from ambient, photosynthetic rates more or less dropped slightly at this CO2 level. Corresponding decrease in photosynthetic rate of these indoor plants with decrease in temperature from ambient to 10\xB0 C exhibited the litmus paper test on the endurance of these plants. At 10\xB0 C, photosynthetic rate of Dracaena reduced to 1/7th of ambient whereas in case of snake and spider plants it was near to half only. Even though snake plant maintained the goodphotosynthetic rate (~5 umol/m2 /s). Transpiration rate also decreased significantly with the decrease in temperature from ambient to 10\xB0 C (Figure 2) in all three plants. Average transpiration rate over all three CO2 concentrations was comparatively higher in dracaena (0.564 mmol/m2 /s) than rest two plants at ambient temperature whereas at 10\xB0 C, it was recorded maximum in snake plant (0.163 mmol/m2 /s). Similarly to the photosynthetic rate, transpiration rate also exhibited steady decline during initial phase of temperature reduction and then decreased gradually except in snake plant which exhibited slightly increase in transpiration at 10\xB0 C at 400ppm CO2 concentration. Variations in the transpiration rate due to change in CO2 concentration were also non-significant at all temperature levels.
               </p>
               <div className= "stats-inner-cover-box">   
                   <h1 className= "stats-inner-cover-phot-box">
                        Net Photosynthesis(umol/m2/s)
                        </h1>
                   <h1  className= "stats-inner-cover-temp-box">
                        temperature(\xB0c) -->
                 </h1>
                   <h1  className= "stats-inner-cover-heading-box">
                        Spider Plant
                   </h1>       
                   <div>
                   <Line
                        data= {data}
                        options= {options}
                        height= {330}
                        width= {600}
                   />
                   </div>
                   </div>
               <div  className= "stats-inner-cover-box">       
                   <h1   className= "stats-inner-cover-phot-box">
                        Net Photosynthesis(umol/m2/s)
                     </h1>
                   <h1  className= "stats-inner-cover-temp-box">
                           temperature(\xB0c) -->
                   </h1>
                   <h1 className= "stats-inner-cover-heading-box">
                          Dracaena Plant
                   </h1>
                    <Line
                        data= {data}
                        options= {options}
                        height= {330}
                        width= {600}
                    /></div>
               <div className= "stats-inner-cover-box">
                 <h1 className= "stats-inner-cover-phot-box">
                     Net Photosynthesis(umol/m2/s)
                 </h1> 
                   <h1  className= "stats-inner-cover-temp-box">
                     temperature(\xB0c) -->
                   </h1>
                   <h1 className= "stats-inner-cover-heading-box">
                            Snake Plant
                   </h1>
                  <Line
                        data= {data}
                        options= {options}
                        height= {330}
                        width= {600}
                  />
               
               <h1 style={{marginTop:"10rem",marginBottom:"0rem"}}>
                        Effect on oxygen releasing potential
               </h1>
               <div>
               <p style={{marginTop:"2rem",marginBottom:"2rem"}}>
                To estimate the oxygen releasing potential of these indoor plants, they were kept in air tight transparent polythene sheet. Gaseous oxygen composition of air inside the polythene bag was checked to measure the oxygen releasing potential of the indoor plants. Results revealed that all three plants behaved differently in their behavior of oxygen releasing potential [Figure 4, 5]. During the light sufficient conditions as presented in [Figure 4] decrease in gaseous oxygen content was rapid in dracaena during first hour whereas spider plant exhibited almost static oxygen content during first two hours and then gradual decrease in inside oxygen content in spider plant showing its better oxygen releasing potential. Snake plant exhibited a slight decrease in polythene gaseous content the first two hours but then it exhibited positive trend in maintaining the oxygen content of gaseous content of polythene up to 5 hrs. During the dark conditions, oxygen releasing potential was also checked and results revealed that dracaena plant was poor in maintaining oxygen content inside the polythene during dark [Figure 5] whereas snake plant exhibited its potential in maintaining oxygen levels above 20.4% inside the polythene assembly even during dark conditions. Spider plants also exhibited its ability to cope with the dark and revealed its oxygen releasing potential even in dark conditions.
               </p>
               </div>
             </div>
               <div className= "stats-inner-cover-box">    
                   <h1  className= "stats-inner-cover-phot-box">
                        Oxygen conc.(%)
                   </h1>
                   <h1 className= "stats-inner-cover-temp-box">
                     Light exposure duration(hrs)
                   </h1>
                   <div  style={{marginTop:"21rem"}}>
                      <Line
                        data= {data2}
                        options= {options1}
                        height= {330}
                        width= {600}
                        />
                        </div>
                </div>
               <div  className= "stats-inner-cover-box">
                   <h1  className= "stats-inner-cover-phot-box">
                           Oxygen conc.(%)
                   </h1>
                   <h1   className= "stats-inner-cover-temp-box">
                       Dark exposure duration(hrs)
                   </h1>
                        <Line
                        data= {data2}
                        options= {options1}
                        height= {330}
                        width= {600}
                     />
                     </div>
             <div className= "stats-slide-icon">       
              <span>
               {icon.arrowup}
              </span>
          </div>
          </div>
          </div>
          )}
export default Stats; 

 