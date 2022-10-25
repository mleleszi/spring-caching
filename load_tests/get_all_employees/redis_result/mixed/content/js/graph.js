/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 3432.0, "series": [{"data": [[0.0, 2.0], [0.1, 2.0], [0.2, 2.0], [0.3, 2.0], [0.4, 2.0], [0.5, 2.0], [0.6, 2.0], [0.7, 2.0], [0.8, 2.0], [0.9, 2.0], [1.0, 2.0], [1.1, 2.0], [1.2, 3.0], [1.3, 3.0], [1.4, 3.0], [1.5, 3.0], [1.6, 3.0], [1.7, 3.0], [1.8, 3.0], [1.9, 3.0], [2.0, 3.0], [2.1, 3.0], [2.2, 3.0], [2.3, 3.0], [2.4, 3.0], [2.5, 3.0], [2.6, 3.0], [2.7, 3.0], [2.8, 3.0], [2.9, 3.0], [3.0, 3.0], [3.1, 3.0], [3.2, 3.0], [3.3, 3.0], [3.4, 3.0], [3.5, 3.0], [3.6, 3.0], [3.7, 3.0], [3.8, 3.0], [3.9, 3.0], [4.0, 3.0], [4.1, 3.0], [4.2, 3.0], [4.3, 3.0], [4.4, 3.0], [4.5, 3.0], [4.6, 4.0], [4.7, 4.0], [4.8, 4.0], [4.9, 4.0], [5.0, 4.0], [5.1, 4.0], [5.2, 4.0], [5.3, 4.0], [5.4, 4.0], [5.5, 4.0], [5.6, 4.0], [5.7, 4.0], [5.8, 4.0], [5.9, 4.0], [6.0, 4.0], [6.1, 4.0], [6.2, 4.0], [6.3, 4.0], [6.4, 4.0], [6.5, 4.0], [6.6, 4.0], [6.7, 4.0], [6.8, 4.0], [6.9, 4.0], [7.0, 4.0], [7.1, 4.0], [7.2, 4.0], [7.3, 4.0], [7.4, 4.0], [7.5, 5.0], [7.6, 5.0], [7.7, 5.0], [7.8, 5.0], [7.9, 5.0], [8.0, 5.0], [8.1, 5.0], [8.2, 5.0], [8.3, 5.0], [8.4, 5.0], [8.5, 5.0], [8.6, 5.0], [8.7, 5.0], [8.8, 5.0], [8.9, 5.0], [9.0, 5.0], [9.1, 5.0], [9.2, 5.0], [9.3, 5.0], [9.4, 5.0], [9.5, 5.0], [9.6, 5.0], [9.7, 5.0], [9.8, 5.0], [9.9, 5.0], [10.0, 5.0], [10.1, 5.0], [10.2, 6.0], [10.3, 6.0], [10.4, 6.0], [10.5, 6.0], [10.6, 6.0], [10.7, 6.0], [10.8, 6.0], [10.9, 6.0], [11.0, 6.0], [11.1, 6.0], [11.2, 6.0], [11.3, 6.0], [11.4, 6.0], [11.5, 6.0], [11.6, 6.0], [11.7, 6.0], [11.8, 6.0], [11.9, 6.0], [12.0, 6.0], [12.1, 6.0], [12.2, 6.0], [12.3, 6.0], [12.4, 6.0], [12.5, 6.0], [12.6, 6.0], [12.7, 7.0], [12.8, 7.0], [12.9, 7.0], [13.0, 7.0], [13.1, 7.0], [13.2, 7.0], [13.3, 7.0], [13.4, 7.0], [13.5, 7.0], [13.6, 7.0], [13.7, 7.0], [13.8, 7.0], [13.9, 7.0], [14.0, 7.0], [14.1, 7.0], [14.2, 7.0], [14.3, 7.0], [14.4, 7.0], [14.5, 7.0], [14.6, 7.0], [14.7, 8.0], [14.8, 8.0], [14.9, 8.0], [15.0, 8.0], [15.1, 8.0], [15.2, 8.0], [15.3, 8.0], [15.4, 8.0], [15.5, 8.0], [15.6, 8.0], [15.7, 8.0], [15.8, 8.0], [15.9, 8.0], [16.0, 8.0], [16.1, 8.0], [16.2, 8.0], [16.3, 9.0], [16.4, 9.0], [16.5, 9.0], [16.6, 9.0], [16.7, 9.0], [16.8, 9.0], [16.9, 9.0], [17.0, 9.0], [17.1, 9.0], [17.2, 9.0], [17.3, 9.0], [17.4, 9.0], [17.5, 9.0], [17.6, 9.0], [17.7, 10.0], [17.8, 10.0], [17.9, 10.0], [18.0, 10.0], [18.1, 10.0], [18.2, 10.0], [18.3, 10.0], [18.4, 10.0], [18.5, 10.0], [18.6, 10.0], [18.7, 10.0], [18.8, 10.0], [18.9, 11.0], [19.0, 11.0], [19.1, 11.0], [19.2, 11.0], [19.3, 11.0], [19.4, 11.0], [19.5, 11.0], [19.6, 11.0], [19.7, 11.0], [19.8, 11.0], [19.9, 11.0], [20.0, 11.0], [20.1, 11.0], [20.2, 12.0], [20.3, 12.0], [20.4, 12.0], [20.5, 12.0], [20.6, 12.0], [20.7, 12.0], [20.8, 12.0], [20.9, 12.0], [21.0, 12.0], [21.1, 12.0], [21.2, 12.0], [21.3, 12.0], [21.4, 13.0], [21.5, 13.0], [21.6, 13.0], [21.7, 13.0], [21.8, 13.0], [21.9, 13.0], [22.0, 13.0], [22.1, 13.0], [22.2, 13.0], [22.3, 13.0], [22.4, 14.0], [22.5, 14.0], [22.6, 14.0], [22.7, 14.0], [22.8, 14.0], [22.9, 14.0], [23.0, 14.0], [23.1, 14.0], [23.2, 14.0], [23.3, 14.0], [23.4, 14.0], [23.5, 15.0], [23.6, 15.0], [23.7, 15.0], [23.8, 15.0], [23.9, 15.0], [24.0, 15.0], [24.1, 15.0], [24.2, 15.0], [24.3, 15.0], [24.4, 15.0], [24.5, 16.0], [24.6, 16.0], [24.7, 16.0], [24.8, 16.0], [24.9, 16.0], [25.0, 16.0], [25.1, 16.0], [25.2, 16.0], [25.3, 17.0], [25.4, 17.0], [25.5, 17.0], [25.6, 17.0], [25.7, 17.0], [25.8, 17.0], [25.9, 18.0], [26.0, 18.0], [26.1, 18.0], [26.2, 18.0], [26.3, 18.0], [26.4, 18.0], [26.5, 19.0], [26.6, 19.0], [26.7, 19.0], [26.8, 19.0], [26.9, 19.0], [27.0, 19.0], [27.1, 20.0], [27.2, 20.0], [27.3, 20.0], [27.4, 20.0], [27.5, 20.0], [27.6, 20.0], [27.7, 21.0], [27.8, 21.0], [27.9, 21.0], [28.0, 21.0], [28.1, 21.0], [28.2, 22.0], [28.3, 22.0], [28.4, 22.0], [28.5, 22.0], [28.6, 22.0], [28.7, 22.0], [28.8, 23.0], [28.9, 23.0], [29.0, 23.0], [29.1, 24.0], [29.2, 24.0], [29.3, 24.0], [29.4, 24.0], [29.5, 25.0], [29.6, 25.0], [29.7, 25.0], [29.8, 25.0], [29.9, 26.0], [30.0, 26.0], [30.1, 26.0], [30.2, 27.0], [30.3, 27.0], [30.4, 27.0], [30.5, 28.0], [30.6, 28.0], [30.7, 29.0], [30.8, 29.0], [30.9, 29.0], [31.0, 29.0], [31.1, 30.0], [31.2, 30.0], [31.3, 30.0], [31.4, 31.0], [31.5, 31.0], [31.6, 32.0], [31.7, 32.0], [31.8, 33.0], [31.9, 33.0], [32.0, 34.0], [32.1, 34.0], [32.2, 34.0], [32.3, 35.0], [32.4, 35.0], [32.5, 36.0], [32.6, 36.0], [32.7, 37.0], [32.8, 37.0], [32.9, 37.0], [33.0, 37.0], [33.1, 38.0], [33.2, 38.0], [33.3, 38.0], [33.4, 39.0], [33.5, 39.0], [33.6, 39.0], [33.7, 39.0], [33.8, 40.0], [33.9, 40.0], [34.0, 40.0], [34.1, 40.0], [34.2, 41.0], [34.3, 41.0], [34.4, 41.0], [34.5, 41.0], [34.6, 42.0], [34.7, 42.0], [34.8, 42.0], [34.9, 43.0], [35.0, 43.0], [35.1, 43.0], [35.2, 43.0], [35.3, 44.0], [35.4, 44.0], [35.5, 44.0], [35.6, 45.0], [35.7, 45.0], [35.8, 45.0], [35.9, 46.0], [36.0, 46.0], [36.1, 46.0], [36.2, 47.0], [36.3, 47.0], [36.4, 47.0], [36.5, 48.0], [36.6, 48.0], [36.7, 49.0], [36.8, 49.0], [36.9, 49.0], [37.0, 50.0], [37.1, 50.0], [37.2, 50.0], [37.3, 51.0], [37.4, 51.0], [37.5, 52.0], [37.6, 52.0], [37.7, 53.0], [37.8, 53.0], [37.9, 53.0], [38.0, 54.0], [38.1, 54.0], [38.2, 55.0], [38.3, 55.0], [38.4, 55.0], [38.5, 56.0], [38.6, 56.0], [38.7, 56.0], [38.8, 57.0], [38.9, 57.0], [39.0, 58.0], [39.1, 58.0], [39.2, 59.0], [39.3, 59.0], [39.4, 59.0], [39.5, 60.0], [39.6, 60.0], [39.7, 61.0], [39.8, 61.0], [39.9, 62.0], [40.0, 62.0], [40.1, 63.0], [40.2, 64.0], [40.3, 64.0], [40.4, 65.0], [40.5, 66.0], [40.6, 67.0], [40.7, 67.0], [40.8, 68.0], [40.9, 69.0], [41.0, 69.0], [41.1, 70.0], [41.2, 71.0], [41.3, 73.0], [41.4, 74.0], [41.5, 75.0], [41.6, 76.0], [41.7, 77.0], [41.8, 78.0], [41.9, 80.0], [42.0, 82.0], [42.1, 83.0], [42.2, 85.0], [42.3, 87.0], [42.4, 90.0], [42.5, 92.0], [42.6, 95.0], [42.7, 97.0], [42.8, 99.0], [42.9, 101.0], [43.0, 102.0], [43.1, 104.0], [43.2, 105.0], [43.3, 106.0], [43.4, 107.0], [43.5, 108.0], [43.6, 109.0], [43.7, 110.0], [43.8, 111.0], [43.9, 112.0], [44.0, 113.0], [44.1, 114.0], [44.2, 114.0], [44.3, 115.0], [44.4, 116.0], [44.5, 118.0], [44.6, 119.0], [44.7, 120.0], [44.8, 121.0], [44.9, 122.0], [45.0, 123.0], [45.1, 124.0], [45.2, 125.0], [45.3, 127.0], [45.4, 129.0], [45.5, 131.0], [45.6, 133.0], [45.7, 136.0], [45.8, 137.0], [45.9, 139.0], [46.0, 141.0], [46.1, 143.0], [46.2, 147.0], [46.3, 151.0], [46.4, 153.0], [46.5, 157.0], [46.6, 160.0], [46.7, 161.0], [46.8, 163.0], [46.9, 166.0], [47.0, 169.0], [47.1, 173.0], [47.2, 184.0], [47.3, 190.0], [47.4, 198.0], [47.5, 204.0], [47.6, 209.0], [47.7, 214.0], [47.8, 218.0], [47.9, 221.0], [48.0, 225.0], [48.1, 231.0], [48.2, 239.0], [48.3, 246.0], [48.4, 250.0], [48.5, 254.0], [48.6, 258.0], [48.7, 261.0], [48.8, 265.0], [48.9, 271.0], [49.0, 277.0], [49.1, 281.0], [49.2, 285.0], [49.3, 291.0], [49.4, 297.0], [49.5, 307.0], [49.6, 313.0], [49.7, 321.0], [49.8, 327.0], [49.9, 336.0], [50.0, 348.0], [50.1, 359.0], [50.2, 372.0], [50.3, 386.0], [50.4, 414.0], [50.5, 427.0], [50.6, 438.0], [50.7, 444.0], [50.8, 461.0], [50.9, 481.0], [51.0, 496.0], [51.1, 521.0], [51.2, 562.0], [51.3, 599.0], [51.4, 644.0], [51.5, 691.0], [51.6, 721.0], [51.7, 757.0], [51.8, 817.0], [51.9, 861.0], [52.0, 889.0], [52.1, 952.0], [52.2, 995.0], [52.3, 1022.0], [52.4, 1031.0], [52.5, 1037.0], [52.6, 1042.0], [52.7, 1045.0], [52.8, 1048.0], [52.9, 1050.0], [53.0, 1053.0], [53.1, 1054.0], [53.2, 1055.0], [53.3, 1057.0], [53.4, 1058.0], [53.5, 1059.0], [53.6, 1060.0], [53.7, 1062.0], [53.8, 1063.0], [53.9, 1064.0], [54.0, 1065.0], [54.1, 1066.0], [54.2, 1067.0], [54.3, 1067.0], [54.4, 1068.0], [54.5, 1069.0], [54.6, 1069.0], [54.7, 1070.0], [54.8, 1070.0], [54.9, 1071.0], [55.0, 1071.0], [55.1, 1072.0], [55.2, 1073.0], [55.3, 1073.0], [55.4, 1074.0], [55.5, 1074.0], [55.6, 1075.0], [55.7, 1076.0], [55.8, 1076.0], [55.9, 1077.0], [56.0, 1078.0], [56.1, 1078.0], [56.2, 1078.0], [56.3, 1079.0], [56.4, 1080.0], [56.5, 1080.0], [56.6, 1081.0], [56.7, 1081.0], [56.8, 1082.0], [56.9, 1083.0], [57.0, 1083.0], [57.1, 1084.0], [57.2, 1084.0], [57.3, 1085.0], [57.4, 1085.0], [57.5, 1086.0], [57.6, 1086.0], [57.7, 1087.0], [57.8, 1087.0], [57.9, 1087.0], [58.0, 1088.0], [58.1, 1088.0], [58.2, 1089.0], [58.3, 1089.0], [58.4, 1089.0], [58.5, 1090.0], [58.6, 1090.0], [58.7, 1091.0], [58.8, 1091.0], [58.9, 1091.0], [59.0, 1092.0], [59.1, 1092.0], [59.2, 1092.0], [59.3, 1093.0], [59.4, 1093.0], [59.5, 1094.0], [59.6, 1094.0], [59.7, 1094.0], [59.8, 1095.0], [59.9, 1095.0], [60.0, 1095.0], [60.1, 1096.0], [60.2, 1096.0], [60.3, 1097.0], [60.4, 1097.0], [60.5, 1097.0], [60.6, 1098.0], [60.7, 1098.0], [60.8, 1099.0], [60.9, 1099.0], [61.0, 1100.0], [61.1, 1100.0], [61.2, 1101.0], [61.3, 1101.0], [61.4, 1102.0], [61.5, 1102.0], [61.6, 1102.0], [61.7, 1103.0], [61.8, 1103.0], [61.9, 1104.0], [62.0, 1104.0], [62.1, 1105.0], [62.2, 1105.0], [62.3, 1105.0], [62.4, 1106.0], [62.5, 1106.0], [62.6, 1107.0], [62.7, 1107.0], [62.8, 1107.0], [62.9, 1108.0], [63.0, 1108.0], [63.1, 1109.0], [63.2, 1109.0], [63.3, 1109.0], [63.4, 1110.0], [63.5, 1110.0], [63.6, 1110.0], [63.7, 1111.0], [63.8, 1111.0], [63.9, 1112.0], [64.0, 1112.0], [64.1, 1113.0], [64.2, 1113.0], [64.3, 1113.0], [64.4, 1114.0], [64.5, 1114.0], [64.6, 1114.0], [64.7, 1115.0], [64.8, 1115.0], [64.9, 1116.0], [65.0, 1116.0], [65.1, 1117.0], [65.2, 1117.0], [65.3, 1118.0], [65.4, 1118.0], [65.5, 1119.0], [65.6, 1119.0], [65.7, 1120.0], [65.8, 1120.0], [65.9, 1121.0], [66.0, 1121.0], [66.1, 1121.0], [66.2, 1122.0], [66.3, 1123.0], [66.4, 1123.0], [66.5, 1124.0], [66.6, 1124.0], [66.7, 1125.0], [66.8, 1125.0], [66.9, 1126.0], [67.0, 1126.0], [67.1, 1127.0], [67.2, 1127.0], [67.3, 1128.0], [67.4, 1128.0], [67.5, 1129.0], [67.6, 1129.0], [67.7, 1130.0], [67.8, 1130.0], [67.9, 1131.0], [68.0, 1131.0], [68.1, 1131.0], [68.2, 1132.0], [68.3, 1132.0], [68.4, 1133.0], [68.5, 1133.0], [68.6, 1134.0], [68.7, 1134.0], [68.8, 1135.0], [68.9, 1135.0], [69.0, 1136.0], [69.1, 1136.0], [69.2, 1137.0], [69.3, 1137.0], [69.4, 1138.0], [69.5, 1138.0], [69.6, 1139.0], [69.7, 1139.0], [69.8, 1139.0], [69.9, 1140.0], [70.0, 1141.0], [70.1, 1141.0], [70.2, 1142.0], [70.3, 1142.0], [70.4, 1143.0], [70.5, 1143.0], [70.6, 1144.0], [70.7, 1144.0], [70.8, 1145.0], [70.9, 1145.0], [71.0, 1146.0], [71.1, 1146.0], [71.2, 1147.0], [71.3, 1147.0], [71.4, 1148.0], [71.5, 1148.0], [71.6, 1149.0], [71.7, 1149.0], [71.8, 1150.0], [71.9, 1150.0], [72.0, 1151.0], [72.1, 1151.0], [72.2, 1152.0], [72.3, 1152.0], [72.4, 1153.0], [72.5, 1153.0], [72.6, 1154.0], [72.7, 1155.0], [72.8, 1155.0], [72.9, 1155.0], [73.0, 1156.0], [73.1, 1156.0], [73.2, 1157.0], [73.3, 1157.0], [73.4, 1158.0], [73.5, 1158.0], [73.6, 1158.0], [73.7, 1159.0], [73.8, 1159.0], [73.9, 1160.0], [74.0, 1160.0], [74.1, 1160.0], [74.2, 1161.0], [74.3, 1161.0], [74.4, 1162.0], [74.5, 1162.0], [74.6, 1162.0], [74.7, 1163.0], [74.8, 1163.0], [74.9, 1163.0], [75.0, 1164.0], [75.1, 1164.0], [75.2, 1165.0], [75.3, 1165.0], [75.4, 1165.0], [75.5, 1166.0], [75.6, 1166.0], [75.7, 1166.0], [75.8, 1167.0], [75.9, 1167.0], [76.0, 1168.0], [76.1, 1168.0], [76.2, 1168.0], [76.3, 1169.0], [76.4, 1169.0], [76.5, 1169.0], [76.6, 1170.0], [76.7, 1170.0], [76.8, 1170.0], [76.9, 1171.0], [77.0, 1171.0], [77.1, 1172.0], [77.2, 1172.0], [77.3, 1172.0], [77.4, 1173.0], [77.5, 1173.0], [77.6, 1173.0], [77.7, 1174.0], [77.8, 1174.0], [77.9, 1175.0], [78.0, 1175.0], [78.1, 1176.0], [78.2, 1176.0], [78.3, 1176.0], [78.4, 1177.0], [78.5, 1177.0], [78.6, 1177.0], [78.7, 1178.0], [78.8, 1178.0], [78.9, 1178.0], [79.0, 1179.0], [79.1, 1179.0], [79.2, 1179.0], [79.3, 1180.0], [79.4, 1180.0], [79.5, 1180.0], [79.6, 1181.0], [79.7, 1181.0], [79.8, 1182.0], [79.9, 1182.0], [80.0, 1182.0], [80.1, 1183.0], [80.2, 1183.0], [80.3, 1183.0], [80.4, 1184.0], [80.5, 1184.0], [80.6, 1184.0], [80.7, 1185.0], [80.8, 1185.0], [80.9, 1185.0], [81.0, 1186.0], [81.1, 1186.0], [81.2, 1186.0], [81.3, 1187.0], [81.4, 1187.0], [81.5, 1187.0], [81.6, 1188.0], [81.7, 1188.0], [81.8, 1188.0], [81.9, 1189.0], [82.0, 1189.0], [82.1, 1189.0], [82.2, 1190.0], [82.3, 1190.0], [82.4, 1190.0], [82.5, 1191.0], [82.6, 1191.0], [82.7, 1191.0], [82.8, 1192.0], [82.9, 1192.0], [83.0, 1192.0], [83.1, 1193.0], [83.2, 1193.0], [83.3, 1193.0], [83.4, 1193.0], [83.5, 1194.0], [83.6, 1194.0], [83.7, 1194.0], [83.8, 1195.0], [83.9, 1195.0], [84.0, 1195.0], [84.1, 1196.0], [84.2, 1196.0], [84.3, 1196.0], [84.4, 1196.0], [84.5, 1197.0], [84.6, 1197.0], [84.7, 1197.0], [84.8, 1198.0], [84.9, 1198.0], [85.0, 1198.0], [85.1, 1199.0], [85.2, 1199.0], [85.3, 1199.0], [85.4, 1200.0], [85.5, 1200.0], [85.6, 1200.0], [85.7, 1200.0], [85.8, 1201.0], [85.9, 1201.0], [86.0, 1201.0], [86.1, 1202.0], [86.2, 1202.0], [86.3, 1202.0], [86.4, 1203.0], [86.5, 1203.0], [86.6, 1203.0], [86.7, 1204.0], [86.8, 1204.0], [86.9, 1204.0], [87.0, 1205.0], [87.1, 1205.0], [87.2, 1206.0], [87.3, 1206.0], [87.4, 1206.0], [87.5, 1207.0], [87.6, 1207.0], [87.7, 1207.0], [87.8, 1208.0], [87.9, 1208.0], [88.0, 1208.0], [88.1, 1209.0], [88.2, 1209.0], [88.3, 1210.0], [88.4, 1210.0], [88.5, 1210.0], [88.6, 1211.0], [88.7, 1211.0], [88.8, 1211.0], [88.9, 1212.0], [89.0, 1212.0], [89.1, 1213.0], [89.2, 1213.0], [89.3, 1213.0], [89.4, 1214.0], [89.5, 1214.0], [89.6, 1214.0], [89.7, 1215.0], [89.8, 1215.0], [89.9, 1215.0], [90.0, 1216.0], [90.1, 1216.0], [90.2, 1217.0], [90.3, 1217.0], [90.4, 1217.0], [90.5, 1217.0], [90.6, 1218.0], [90.7, 1218.0], [90.8, 1219.0], [90.9, 1219.0], [91.0, 1220.0], [91.1, 1220.0], [91.2, 1220.0], [91.3, 1221.0], [91.4, 1221.0], [91.5, 1222.0], [91.6, 1222.0], [91.7, 1223.0], [91.8, 1223.0], [91.9, 1223.0], [92.0, 1224.0], [92.1, 1224.0], [92.2, 1225.0], [92.3, 1225.0], [92.4, 1226.0], [92.5, 1226.0], [92.6, 1227.0], [92.7, 1227.0], [92.8, 1228.0], [92.9, 1228.0], [93.0, 1229.0], [93.1, 1229.0], [93.2, 1229.0], [93.3, 1230.0], [93.4, 1231.0], [93.5, 1231.0], [93.6, 1232.0], [93.7, 1232.0], [93.8, 1233.0], [93.9, 1233.0], [94.0, 1233.0], [94.1, 1234.0], [94.2, 1234.0], [94.3, 1235.0], [94.4, 1236.0], [94.5, 1236.0], [94.6, 1237.0], [94.7, 1237.0], [94.8, 1238.0], [94.9, 1238.0], [95.0, 1239.0], [95.1, 1240.0], [95.2, 1241.0], [95.3, 1242.0], [95.4, 1242.0], [95.5, 1243.0], [95.6, 1244.0], [95.7, 1245.0], [95.8, 1246.0], [95.9, 1246.0], [96.0, 1247.0], [96.1, 1248.0], [96.2, 1249.0], [96.3, 1249.0], [96.4, 1250.0], [96.5, 1251.0], [96.6, 1253.0], [96.7, 1254.0], [96.8, 1254.0], [96.9, 1255.0], [97.0, 1256.0], [97.1, 1258.0], [97.2, 1259.0], [97.3, 1261.0], [97.4, 1262.0], [97.5, 1263.0], [97.6, 1265.0], [97.7, 1267.0], [97.8, 1268.0], [97.9, 1271.0], [98.0, 1273.0], [98.1, 1276.0], [98.2, 1280.0], [98.3, 1285.0], [98.4, 1291.0], [98.5, 1297.0], [98.6, 1316.0], [98.7, 1347.0], [98.8, 2021.0], [98.9, 2047.0], [99.0, 2066.0], [99.1, 2085.0], [99.2, 2114.0], [99.3, 2154.0], [99.4, 2190.0], [99.5, 2218.0], [99.6, 2253.0], [99.7, 2286.0], [99.8, 2316.0], [99.9, 2359.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 8564.0, "series": [{"data": [[0.0, 8564.0], [600.0, 46.0], [700.0, 46.0], [800.0, 51.0], [900.0, 39.0], [1000.0, 1749.0], [1100.0, 4882.0], [1200.0, 2630.0], [1300.0, 45.0], [1400.0, 1.0], [100.0, 921.0], [1600.0, 1.0], [1700.0, 3.0], [1900.0, 3.0], [2000.0, 77.0], [2100.0, 54.0], [2200.0, 64.0], [2300.0, 36.0], [2400.0, 1.0], [3000.0, 4.0], [3100.0, 4.0], [200.0, 401.0], [3200.0, 1.0], [3300.0, 2.0], [3400.0, 1.0], [300.0, 186.0], [400.0, 130.0], [500.0, 58.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3400.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 251.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 10203.0, "series": [{"data": [[0.0, 10203.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 9546.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 251.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 57.70588235294109, "minX": 1.66523136E12, "maxY": 99.90147058823501, "series": [{"data": [[1.66523136E12, 99.90147058823501], [1.66523154E12, 85.93659999999973], [1.66523142E12, 99.6680756843801], [1.66523148E12, 57.70588235294109]], "isOverall": false, "label": "Get all users test", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66523154E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 5.642857142857144, "minX": 1.0, "maxY": 775.6342877094943, "series": [{"data": [[2.0, 59.333333333333336], [3.0, 12.454545454545455], [4.0, 15.18181818181818], [5.0, 10.444444444444443], [6.0, 152.0], [7.0, 28.428571428571427], [8.0, 76.25], [9.0, 40.44444444444444], [10.0, 111.33333333333334], [11.0, 41.875], [12.0, 26.39999999999999], [13.0, 284.33333333333337], [14.0, 338.0], [15.0, 221.50000000000003], [16.0, 45.916666666666664], [17.0, 26.000000000000007], [18.0, 130.25], [19.0, 48.6], [20.0, 85.71428571428571], [21.0, 43.772727272727266], [22.0, 84.88888888888887], [23.0, 31.13793103448277], [24.0, 134.6190476190476], [25.0, 195.07142857142856], [26.0, 47.277777777777764], [27.0, 80.15789473684212], [28.0, 26.607142857142854], [29.0, 44.260869565217384], [30.0, 45.74074074074074], [31.0, 139.20000000000002], [33.0, 175.77777777777777], [32.0, 53.35483870967742], [35.0, 124.76190476190477], [34.0, 20.066666666666666], [37.0, 120.15624999999999], [36.0, 222.80645161290323], [39.0, 71.39999999999999], [38.0, 74.71428571428572], [41.0, 44.066666666666684], [40.0, 51.421052631578945], [43.0, 43.014925373134325], [42.0, 102.60000000000001], [45.0, 63.884615384615365], [44.0, 25.111111111111107], [47.0, 133.97142857142862], [46.0, 153.45], [49.0, 129.44444444444446], [48.0, 148.81818181818178], [51.0, 113.6923076923077], [50.0, 131.1785714285714], [53.0, 39.769230769230774], [52.0, 239.93617021276594], [55.0, 159.6875], [54.0, 81.88888888888889], [57.0, 170.82608695652172], [56.0, 185.71153846153828], [59.0, 70.50000000000003], [58.0, 87.38356164383558], [61.0, 121.88235294117648], [60.0, 41.80379746835443], [63.0, 111.9322033898305], [62.0, 85.97674418604652], [66.0, 193.84375000000006], [67.0, 419.04], [65.0, 272.3421052631578], [64.0, 27.333333333333336], [71.0, 159.22727272727272], [70.0, 41.26804123711342], [69.0, 112.69230769230772], [68.0, 304.1935483870967], [75.0, 121.2207792207792], [74.0, 212.55555555555551], [73.0, 181.4262295081967], [72.0, 196.70967741935485], [79.0, 187.66666666666677], [78.0, 315.05970149253744], [77.0, 132.7252747252747], [76.0, 138.9583333333334], [83.0, 481.04347826086956], [82.0, 116.69182389937103], [81.0, 195.58208955223876], [80.0, 381.3972602739725], [85.0, 194.82178217821786], [86.0, 67.99999999999996], [87.0, 234.23200000000008], [84.0, 60.32743362831857], [89.0, 59.48184818481849], [91.0, 218.10697674418614], [90.0, 195.8963414634146], [88.0, 272.2647058823529], [95.0, 259.9333333333334], [94.0, 82.1803278688525], [93.0, 470.59375], [92.0, 187.5789473684212], [99.0, 330.9144981412638], [98.0, 213.67839195979883], [97.0, 505.3397129186601], [96.0, 438.1168831168831], [100.0, 775.6342877094943], [1.0, 5.642857142857144]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[92.28724999999939, 603.3805500000024]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 657.3333333333334, "minX": 1.66523136E12, "maxY": 1.4599285E7, "series": [{"data": [[1.66523136E12, 6949282.666666667], [1.66523154E12, 1.4599285E7], [1.66523142E12, 7252948.8], [1.66523148E12, 397101.86666666664]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.66523136E12, 11503.333333333334], [1.66523154E12, 24166.666666666668], [1.66523142E12, 12006.0], [1.66523148E12, 657.3333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66523154E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 54.40759999999989, "minX": 1.66523136E12, "maxY": 1204.6582125603886, "series": [{"data": [[1.66523136E12, 1110.63067226891], [1.66523154E12, 54.40759999999989], [1.66523142E12, 1204.6582125603886], [1.66523148E12, 927.1727941176471]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66523154E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 52.876499999999986, "minX": 1.66523136E12, "maxY": 1203.125201288244, "series": [{"data": [[1.66523136E12, 1108.944537815123], [1.66523154E12, 52.876499999999986], [1.66523142E12, 1203.125201288244], [1.66523148E12, 925.4779411764698]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66523154E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.66523136E12, "maxY": 0.009460547504025687, "series": [{"data": [[1.66523136E12, 0.007142857142857162], [1.66523154E12, 0.004300000000000014], [1.66523142E12, 0.009460547504025687], [1.66523148E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66523154E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 2.0, "minX": 1.66523136E12, "maxY": 3432.0, "series": [{"data": [[1.66523136E12, 3206.0], [1.66523154E12, 841.0], [1.66523142E12, 3432.0], [1.66523148E12, 2132.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.66523136E12, 1174.0], [1.66523154E12, 148.0], [1.66523142E12, 1253.0], [1.66523148E12, 1155.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.66523136E12, 2126.7800000000007], [1.66523154E12, 487.0], [1.66523142E12, 2289.0], [1.66523148E12, 2025.8599999999997]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.66523136E12, 1218.0], [1.66523154E12, 267.9499999999989], [1.66523142E12, 1272.0], [1.66523148E12, 1163.6999999999998]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.66523136E12, 56.0], [1.66523154E12, 2.0], [1.66523142E12, 75.0], [1.66523148E12, 49.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.66523136E12, 1110.0], [1.66523154E12, 16.0], [1.66523142E12, 1201.0], [1.66523148E12, 1034.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66523154E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 7.0, "minX": 20.0, "maxY": 1234.0, "series": [{"data": [[40.0, 394.0], [75.0, 1054.0], [78.0, 1221.5], [79.0, 1234.0], [77.0, 878.0], [80.0, 1209.0], [81.0, 1220.0], [82.0, 1213.0], [83.0, 1197.0], [86.0, 1174.0], [87.0, 1150.0], [84.0, 1194.0], [85.0, 1181.0], [88.0, 1147.0], [89.0, 1113.0], [90.0, 1097.0], [91.0, 1097.0], [92.0, 1094.0], [94.0, 1086.0], [93.0, 1089.0], [95.0, 1084.0], [1487.0, 50.0], [1586.0, 7.0], [1621.0, 17.0], [1627.0, 14.0], [1600.0, 11.0], [114.0, 31.0], [20.0, 672.5], [338.0, 7.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1627.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 6.0, "minX": 20.0, "maxY": 1233.0, "series": [{"data": [[40.0, 392.5], [75.0, 1052.0], [78.0, 1219.5], [79.0, 1233.0], [77.0, 876.0], [80.0, 1208.0], [81.0, 1219.0], [82.0, 1211.0], [83.0, 1196.0], [86.0, 1173.0], [87.0, 1149.0], [84.0, 1193.0], [85.0, 1179.0], [88.0, 1146.0], [89.0, 1112.0], [90.0, 1096.0], [91.0, 1095.0], [92.0, 1093.0], [94.0, 1084.5], [93.0, 1088.0], [95.0, 1081.0], [1487.0, 49.0], [1586.0, 6.0], [1621.0, 15.0], [1627.0, 13.0], [1600.0, 10.0], [114.0, 30.5], [20.0, 659.5], [338.0, 7.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1627.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 3.0833333333333335, "minX": 1.66523136E12, "maxY": 166.66666666666666, "series": [{"data": [[1.66523136E12, 81.0], [1.66523154E12, 166.66666666666666], [1.66523142E12, 82.58333333333333], [1.66523148E12, 3.0833333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66523154E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 4.533333333333333, "minX": 1.66523136E12, "maxY": 166.66666666666666, "series": [{"data": [[1.66523136E12, 79.33333333333333], [1.66523154E12, 166.66666666666666], [1.66523142E12, 82.8], [1.66523148E12, 4.533333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66523154E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 4.533333333333333, "minX": 1.66523136E12, "maxY": 166.66666666666666, "series": [{"data": [[1.66523136E12, 79.33333333333333], [1.66523154E12, 166.66666666666666], [1.66523142E12, 82.8], [1.66523148E12, 4.533333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66523154E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 4.533333333333333, "minX": 1.66523136E12, "maxY": 166.66666666666666, "series": [{"data": [[1.66523136E12, 79.33333333333333], [1.66523154E12, 166.66666666666666], [1.66523142E12, 82.8], [1.66523148E12, 4.533333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66523154E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

