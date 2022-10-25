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
        data: {"result": {"minY": 47.0, "minX": 0.0, "maxY": 3543.0, "series": [{"data": [[0.0, 47.0], [0.1, 87.0], [0.2, 101.0], [0.3, 104.0], [0.4, 108.0], [0.5, 109.0], [0.6, 109.0], [0.7, 112.0], [0.8, 115.0], [0.9, 116.0], [1.0, 117.0], [1.1, 119.0], [1.2, 120.0], [1.3, 121.0], [1.4, 122.0], [1.5, 123.0], [1.6, 124.0], [1.7, 125.0], [1.8, 125.0], [1.9, 126.0], [2.0, 128.0], [2.1, 129.0], [2.2, 130.0], [2.3, 135.0], [2.4, 140.0], [2.5, 146.0], [2.6, 160.0], [2.7, 196.0], [2.8, 235.0], [2.9, 290.0], [3.0, 339.0], [3.1, 377.0], [3.2, 439.0], [3.3, 511.0], [3.4, 527.0], [3.5, 555.0], [3.6, 610.0], [3.7, 636.0], [3.8, 675.0], [3.9, 718.0], [4.0, 737.0], [4.1, 767.0], [4.2, 790.0], [4.3, 808.0], [4.4, 819.0], [4.5, 846.0], [4.6, 853.0], [4.7, 872.0], [4.8, 896.0], [4.9, 933.0], [5.0, 943.0], [5.1, 955.0], [5.2, 974.0], [5.3, 987.0], [5.4, 997.0], [5.5, 1013.0], [5.6, 1020.0], [5.7, 1027.0], [5.8, 1031.0], [5.9, 1038.0], [6.0, 1042.0], [6.1, 1045.0], [6.2, 1046.0], [6.3, 1048.0], [6.4, 1051.0], [6.5, 1052.0], [6.6, 1053.0], [6.7, 1054.0], [6.8, 1055.0], [6.9, 1056.0], [7.0, 1057.0], [7.1, 1057.0], [7.2, 1058.0], [7.3, 1059.0], [7.4, 1059.0], [7.5, 1060.0], [7.6, 1061.0], [7.7, 1061.0], [7.8, 1062.0], [7.9, 1063.0], [8.0, 1063.0], [8.1, 1064.0], [8.2, 1064.0], [8.3, 1065.0], [8.4, 1065.0], [8.5, 1066.0], [8.6, 1067.0], [8.7, 1067.0], [8.8, 1067.0], [8.9, 1068.0], [9.0, 1068.0], [9.1, 1069.0], [9.2, 1069.0], [9.3, 1069.0], [9.4, 1070.0], [9.5, 1070.0], [9.6, 1070.0], [9.7, 1071.0], [9.8, 1071.0], [9.9, 1072.0], [10.0, 1072.0], [10.1, 1072.0], [10.2, 1073.0], [10.3, 1073.0], [10.4, 1073.0], [10.5, 1074.0], [10.6, 1074.0], [10.7, 1074.0], [10.8, 1075.0], [10.9, 1075.0], [11.0, 1076.0], [11.1, 1076.0], [11.2, 1076.0], [11.3, 1077.0], [11.4, 1077.0], [11.5, 1077.0], [11.6, 1077.0], [11.7, 1078.0], [11.8, 1078.0], [11.9, 1078.0], [12.0, 1079.0], [12.1, 1079.0], [12.2, 1079.0], [12.3, 1079.0], [12.4, 1080.0], [12.5, 1080.0], [12.6, 1080.0], [12.7, 1081.0], [12.8, 1081.0], [12.9, 1081.0], [13.0, 1082.0], [13.1, 1082.0], [13.2, 1082.0], [13.3, 1082.0], [13.4, 1083.0], [13.5, 1083.0], [13.6, 1084.0], [13.7, 1084.0], [13.8, 1084.0], [13.9, 1085.0], [14.0, 1085.0], [14.1, 1085.0], [14.2, 1086.0], [14.3, 1086.0], [14.4, 1086.0], [14.5, 1087.0], [14.6, 1087.0], [14.7, 1087.0], [14.8, 1087.0], [14.9, 1088.0], [15.0, 1088.0], [15.1, 1089.0], [15.2, 1089.0], [15.3, 1089.0], [15.4, 1089.0], [15.5, 1090.0], [15.6, 1090.0], [15.7, 1090.0], [15.8, 1090.0], [15.9, 1091.0], [16.0, 1091.0], [16.1, 1091.0], [16.2, 1092.0], [16.3, 1092.0], [16.4, 1092.0], [16.5, 1092.0], [16.6, 1092.0], [16.7, 1093.0], [16.8, 1093.0], [16.9, 1093.0], [17.0, 1094.0], [17.1, 1094.0], [17.2, 1094.0], [17.3, 1094.0], [17.4, 1094.0], [17.5, 1095.0], [17.6, 1095.0], [17.7, 1095.0], [17.8, 1096.0], [17.9, 1096.0], [18.0, 1096.0], [18.1, 1096.0], [18.2, 1097.0], [18.3, 1097.0], [18.4, 1097.0], [18.5, 1098.0], [18.6, 1098.0], [18.7, 1098.0], [18.8, 1098.0], [18.9, 1099.0], [19.0, 1099.0], [19.1, 1099.0], [19.2, 1100.0], [19.3, 1100.0], [19.4, 1101.0], [19.5, 1101.0], [19.6, 1101.0], [19.7, 1101.0], [19.8, 1102.0], [19.9, 1102.0], [20.0, 1102.0], [20.1, 1102.0], [20.2, 1103.0], [20.3, 1103.0], [20.4, 1103.0], [20.5, 1103.0], [20.6, 1104.0], [20.7, 1104.0], [20.8, 1104.0], [20.9, 1105.0], [21.0, 1105.0], [21.1, 1105.0], [21.2, 1105.0], [21.3, 1106.0], [21.4, 1106.0], [21.5, 1106.0], [21.6, 1107.0], [21.7, 1107.0], [21.8, 1107.0], [21.9, 1107.0], [22.0, 1108.0], [22.1, 1108.0], [22.2, 1108.0], [22.3, 1108.0], [22.4, 1109.0], [22.5, 1109.0], [22.6, 1109.0], [22.7, 1110.0], [22.8, 1110.0], [22.9, 1110.0], [23.0, 1110.0], [23.1, 1110.0], [23.2, 1111.0], [23.3, 1111.0], [23.4, 1111.0], [23.5, 1111.0], [23.6, 1112.0], [23.7, 1112.0], [23.8, 1112.0], [23.9, 1112.0], [24.0, 1113.0], [24.1, 1113.0], [24.2, 1114.0], [24.3, 1114.0], [24.4, 1114.0], [24.5, 1114.0], [24.6, 1115.0], [24.7, 1115.0], [24.8, 1115.0], [24.9, 1115.0], [25.0, 1115.0], [25.1, 1116.0], [25.2, 1116.0], [25.3, 1116.0], [25.4, 1117.0], [25.5, 1117.0], [25.6, 1117.0], [25.7, 1117.0], [25.8, 1117.0], [25.9, 1118.0], [26.0, 1118.0], [26.1, 1118.0], [26.2, 1119.0], [26.3, 1119.0], [26.4, 1119.0], [26.5, 1120.0], [26.6, 1120.0], [26.7, 1121.0], [26.8, 1121.0], [26.9, 1121.0], [27.0, 1122.0], [27.1, 1122.0], [27.2, 1122.0], [27.3, 1122.0], [27.4, 1123.0], [27.5, 1123.0], [27.6, 1123.0], [27.7, 1124.0], [27.8, 1124.0], [27.9, 1125.0], [28.0, 1125.0], [28.1, 1125.0], [28.2, 1125.0], [28.3, 1126.0], [28.4, 1126.0], [28.5, 1126.0], [28.6, 1126.0], [28.7, 1127.0], [28.8, 1127.0], [28.9, 1128.0], [29.0, 1128.0], [29.1, 1128.0], [29.2, 1129.0], [29.3, 1129.0], [29.4, 1129.0], [29.5, 1129.0], [29.6, 1130.0], [29.7, 1130.0], [29.8, 1130.0], [29.9, 1131.0], [30.0, 1131.0], [30.1, 1131.0], [30.2, 1132.0], [30.3, 1132.0], [30.4, 1132.0], [30.5, 1133.0], [30.6, 1133.0], [30.7, 1133.0], [30.8, 1133.0], [30.9, 1134.0], [31.0, 1134.0], [31.1, 1134.0], [31.2, 1134.0], [31.3, 1135.0], [31.4, 1135.0], [31.5, 1135.0], [31.6, 1136.0], [31.7, 1136.0], [31.8, 1136.0], [31.9, 1137.0], [32.0, 1137.0], [32.1, 1137.0], [32.2, 1138.0], [32.3, 1138.0], [32.4, 1139.0], [32.5, 1139.0], [32.6, 1139.0], [32.7, 1139.0], [32.8, 1140.0], [32.9, 1140.0], [33.0, 1140.0], [33.1, 1141.0], [33.2, 1141.0], [33.3, 1141.0], [33.4, 1142.0], [33.5, 1142.0], [33.6, 1142.0], [33.7, 1142.0], [33.8, 1143.0], [33.9, 1143.0], [34.0, 1144.0], [34.1, 1144.0], [34.2, 1144.0], [34.3, 1145.0], [34.4, 1145.0], [34.5, 1146.0], [34.6, 1146.0], [34.7, 1146.0], [34.8, 1146.0], [34.9, 1147.0], [35.0, 1147.0], [35.1, 1147.0], [35.2, 1148.0], [35.3, 1148.0], [35.4, 1148.0], [35.5, 1148.0], [35.6, 1149.0], [35.7, 1149.0], [35.8, 1149.0], [35.9, 1150.0], [36.0, 1150.0], [36.1, 1150.0], [36.2, 1150.0], [36.3, 1151.0], [36.4, 1151.0], [36.5, 1151.0], [36.6, 1151.0], [36.7, 1152.0], [36.8, 1152.0], [36.9, 1152.0], [37.0, 1152.0], [37.1, 1153.0], [37.2, 1153.0], [37.3, 1153.0], [37.4, 1154.0], [37.5, 1154.0], [37.6, 1154.0], [37.7, 1154.0], [37.8, 1155.0], [37.9, 1155.0], [38.0, 1155.0], [38.1, 1156.0], [38.2, 1156.0], [38.3, 1156.0], [38.4, 1156.0], [38.5, 1157.0], [38.6, 1157.0], [38.7, 1157.0], [38.8, 1158.0], [38.9, 1158.0], [39.0, 1158.0], [39.1, 1158.0], [39.2, 1159.0], [39.3, 1159.0], [39.4, 1159.0], [39.5, 1160.0], [39.6, 1160.0], [39.7, 1160.0], [39.8, 1161.0], [39.9, 1161.0], [40.0, 1161.0], [40.1, 1162.0], [40.2, 1162.0], [40.3, 1162.0], [40.4, 1163.0], [40.5, 1163.0], [40.6, 1163.0], [40.7, 1164.0], [40.8, 1164.0], [40.9, 1164.0], [41.0, 1165.0], [41.1, 1165.0], [41.2, 1165.0], [41.3, 1166.0], [41.4, 1166.0], [41.5, 1166.0], [41.6, 1166.0], [41.7, 1167.0], [41.8, 1167.0], [41.9, 1167.0], [42.0, 1168.0], [42.1, 1168.0], [42.2, 1168.0], [42.3, 1168.0], [42.4, 1169.0], [42.5, 1169.0], [42.6, 1169.0], [42.7, 1170.0], [42.8, 1170.0], [42.9, 1170.0], [43.0, 1170.0], [43.1, 1171.0], [43.2, 1171.0], [43.3, 1171.0], [43.4, 1171.0], [43.5, 1172.0], [43.6, 1172.0], [43.7, 1172.0], [43.8, 1173.0], [43.9, 1173.0], [44.0, 1173.0], [44.1, 1173.0], [44.2, 1174.0], [44.3, 1174.0], [44.4, 1174.0], [44.5, 1174.0], [44.6, 1175.0], [44.7, 1175.0], [44.8, 1175.0], [44.9, 1176.0], [45.0, 1176.0], [45.1, 1176.0], [45.2, 1176.0], [45.3, 1176.0], [45.4, 1177.0], [45.5, 1177.0], [45.6, 1177.0], [45.7, 1178.0], [45.8, 1178.0], [45.9, 1178.0], [46.0, 1178.0], [46.1, 1179.0], [46.2, 1179.0], [46.3, 1179.0], [46.4, 1179.0], [46.5, 1180.0], [46.6, 1180.0], [46.7, 1180.0], [46.8, 1180.0], [46.9, 1180.0], [47.0, 1181.0], [47.1, 1181.0], [47.2, 1181.0], [47.3, 1182.0], [47.4, 1182.0], [47.5, 1182.0], [47.6, 1182.0], [47.7, 1183.0], [47.8, 1183.0], [47.9, 1183.0], [48.0, 1183.0], [48.1, 1184.0], [48.2, 1184.0], [48.3, 1184.0], [48.4, 1185.0], [48.5, 1185.0], [48.6, 1185.0], [48.7, 1185.0], [48.8, 1185.0], [48.9, 1186.0], [49.0, 1186.0], [49.1, 1186.0], [49.2, 1186.0], [49.3, 1186.0], [49.4, 1187.0], [49.5, 1187.0], [49.6, 1187.0], [49.7, 1188.0], [49.8, 1188.0], [49.9, 1188.0], [50.0, 1188.0], [50.1, 1189.0], [50.2, 1189.0], [50.3, 1189.0], [50.4, 1189.0], [50.5, 1190.0], [50.6, 1190.0], [50.7, 1190.0], [50.8, 1190.0], [50.9, 1190.0], [51.0, 1191.0], [51.1, 1191.0], [51.2, 1191.0], [51.3, 1191.0], [51.4, 1192.0], [51.5, 1192.0], [51.6, 1192.0], [51.7, 1193.0], [51.8, 1193.0], [51.9, 1193.0], [52.0, 1193.0], [52.1, 1194.0], [52.2, 1194.0], [52.3, 1194.0], [52.4, 1194.0], [52.5, 1194.0], [52.6, 1195.0], [52.7, 1195.0], [52.8, 1195.0], [52.9, 1195.0], [53.0, 1195.0], [53.1, 1196.0], [53.2, 1196.0], [53.3, 1196.0], [53.4, 1196.0], [53.5, 1197.0], [53.6, 1197.0], [53.7, 1197.0], [53.8, 1197.0], [53.9, 1197.0], [54.0, 1198.0], [54.1, 1198.0], [54.2, 1198.0], [54.3, 1199.0], [54.4, 1199.0], [54.5, 1199.0], [54.6, 1199.0], [54.7, 1200.0], [54.8, 1200.0], [54.9, 1200.0], [55.0, 1200.0], [55.1, 1201.0], [55.2, 1201.0], [55.3, 1201.0], [55.4, 1201.0], [55.5, 1201.0], [55.6, 1202.0], [55.7, 1202.0], [55.8, 1202.0], [55.9, 1202.0], [56.0, 1203.0], [56.1, 1203.0], [56.2, 1203.0], [56.3, 1203.0], [56.4, 1204.0], [56.5, 1204.0], [56.6, 1204.0], [56.7, 1204.0], [56.8, 1205.0], [56.9, 1205.0], [57.0, 1205.0], [57.1, 1205.0], [57.2, 1206.0], [57.3, 1206.0], [57.4, 1206.0], [57.5, 1207.0], [57.6, 1207.0], [57.7, 1207.0], [57.8, 1207.0], [57.9, 1207.0], [58.0, 1208.0], [58.1, 1208.0], [58.2, 1208.0], [58.3, 1208.0], [58.4, 1209.0], [58.5, 1209.0], [58.6, 1209.0], [58.7, 1210.0], [58.8, 1210.0], [58.9, 1210.0], [59.0, 1210.0], [59.1, 1211.0], [59.2, 1211.0], [59.3, 1211.0], [59.4, 1212.0], [59.5, 1212.0], [59.6, 1212.0], [59.7, 1212.0], [59.8, 1213.0], [59.9, 1213.0], [60.0, 1213.0], [60.1, 1213.0], [60.2, 1214.0], [60.3, 1214.0], [60.4, 1214.0], [60.5, 1214.0], [60.6, 1215.0], [60.7, 1215.0], [60.8, 1215.0], [60.9, 1216.0], [61.0, 1216.0], [61.1, 1216.0], [61.2, 1216.0], [61.3, 1217.0], [61.4, 1217.0], [61.5, 1217.0], [61.6, 1218.0], [61.7, 1218.0], [61.8, 1218.0], [61.9, 1218.0], [62.0, 1219.0], [62.1, 1219.0], [62.2, 1219.0], [62.3, 1219.0], [62.4, 1219.0], [62.5, 1220.0], [62.6, 1220.0], [62.7, 1220.0], [62.8, 1220.0], [62.9, 1221.0], [63.0, 1221.0], [63.1, 1221.0], [63.2, 1221.0], [63.3, 1221.0], [63.4, 1222.0], [63.5, 1222.0], [63.6, 1222.0], [63.7, 1222.0], [63.8, 1223.0], [63.9, 1223.0], [64.0, 1223.0], [64.1, 1223.0], [64.2, 1224.0], [64.3, 1224.0], [64.4, 1224.0], [64.5, 1224.0], [64.6, 1225.0], [64.7, 1225.0], [64.8, 1225.0], [64.9, 1225.0], [65.0, 1226.0], [65.1, 1226.0], [65.2, 1226.0], [65.3, 1226.0], [65.4, 1226.0], [65.5, 1227.0], [65.6, 1227.0], [65.7, 1227.0], [65.8, 1227.0], [65.9, 1228.0], [66.0, 1228.0], [66.1, 1228.0], [66.2, 1228.0], [66.3, 1228.0], [66.4, 1229.0], [66.5, 1229.0], [66.6, 1229.0], [66.7, 1229.0], [66.8, 1230.0], [66.9, 1230.0], [67.0, 1230.0], [67.1, 1230.0], [67.2, 1230.0], [67.3, 1230.0], [67.4, 1231.0], [67.5, 1231.0], [67.6, 1231.0], [67.7, 1231.0], [67.8, 1231.0], [67.9, 1231.0], [68.0, 1232.0], [68.1, 1232.0], [68.2, 1232.0], [68.3, 1232.0], [68.4, 1232.0], [68.5, 1233.0], [68.6, 1233.0], [68.7, 1233.0], [68.8, 1233.0], [68.9, 1233.0], [69.0, 1234.0], [69.1, 1234.0], [69.2, 1234.0], [69.3, 1234.0], [69.4, 1234.0], [69.5, 1234.0], [69.6, 1235.0], [69.7, 1235.0], [69.8, 1235.0], [69.9, 1235.0], [70.0, 1235.0], [70.1, 1235.0], [70.2, 1236.0], [70.3, 1236.0], [70.4, 1236.0], [70.5, 1236.0], [70.6, 1236.0], [70.7, 1236.0], [70.8, 1237.0], [70.9, 1237.0], [71.0, 1237.0], [71.1, 1237.0], [71.2, 1237.0], [71.3, 1237.0], [71.4, 1237.0], [71.5, 1238.0], [71.6, 1238.0], [71.7, 1238.0], [71.8, 1238.0], [71.9, 1238.0], [72.0, 1238.0], [72.1, 1238.0], [72.2, 1239.0], [72.3, 1239.0], [72.4, 1239.0], [72.5, 1239.0], [72.6, 1239.0], [72.7, 1239.0], [72.8, 1240.0], [72.9, 1240.0], [73.0, 1240.0], [73.1, 1240.0], [73.2, 1240.0], [73.3, 1240.0], [73.4, 1241.0], [73.5, 1241.0], [73.6, 1241.0], [73.7, 1241.0], [73.8, 1241.0], [73.9, 1241.0], [74.0, 1241.0], [74.1, 1242.0], [74.2, 1242.0], [74.3, 1242.0], [74.4, 1242.0], [74.5, 1242.0], [74.6, 1242.0], [74.7, 1243.0], [74.8, 1243.0], [74.9, 1243.0], [75.0, 1243.0], [75.1, 1243.0], [75.2, 1244.0], [75.3, 1244.0], [75.4, 1244.0], [75.5, 1244.0], [75.6, 1244.0], [75.7, 1245.0], [75.8, 1245.0], [75.9, 1245.0], [76.0, 1245.0], [76.1, 1245.0], [76.2, 1246.0], [76.3, 1246.0], [76.4, 1246.0], [76.5, 1246.0], [76.6, 1247.0], [76.7, 1247.0], [76.8, 1247.0], [76.9, 1247.0], [77.0, 1247.0], [77.1, 1248.0], [77.2, 1248.0], [77.3, 1248.0], [77.4, 1248.0], [77.5, 1248.0], [77.6, 1248.0], [77.7, 1249.0], [77.8, 1249.0], [77.9, 1249.0], [78.0, 1249.0], [78.1, 1250.0], [78.2, 1250.0], [78.3, 1250.0], [78.4, 1250.0], [78.5, 1250.0], [78.6, 1250.0], [78.7, 1251.0], [78.8, 1251.0], [78.9, 1251.0], [79.0, 1251.0], [79.1, 1251.0], [79.2, 1251.0], [79.3, 1251.0], [79.4, 1252.0], [79.5, 1252.0], [79.6, 1252.0], [79.7, 1253.0], [79.8, 1253.0], [79.9, 1253.0], [80.0, 1253.0], [80.1, 1253.0], [80.2, 1253.0], [80.3, 1254.0], [80.4, 1254.0], [80.5, 1254.0], [80.6, 1254.0], [80.7, 1255.0], [80.8, 1255.0], [80.9, 1255.0], [81.0, 1255.0], [81.1, 1255.0], [81.2, 1256.0], [81.3, 1256.0], [81.4, 1256.0], [81.5, 1256.0], [81.6, 1257.0], [81.7, 1257.0], [81.8, 1257.0], [81.9, 1257.0], [82.0, 1257.0], [82.1, 1258.0], [82.2, 1258.0], [82.3, 1258.0], [82.4, 1258.0], [82.5, 1258.0], [82.6, 1259.0], [82.7, 1259.0], [82.8, 1259.0], [82.9, 1259.0], [83.0, 1260.0], [83.1, 1260.0], [83.2, 1260.0], [83.3, 1260.0], [83.4, 1260.0], [83.5, 1261.0], [83.6, 1261.0], [83.7, 1261.0], [83.8, 1262.0], [83.9, 1262.0], [84.0, 1262.0], [84.1, 1262.0], [84.2, 1262.0], [84.3, 1263.0], [84.4, 1263.0], [84.5, 1263.0], [84.6, 1263.0], [84.7, 1263.0], [84.8, 1264.0], [84.9, 1264.0], [85.0, 1264.0], [85.1, 1264.0], [85.2, 1265.0], [85.3, 1265.0], [85.4, 1265.0], [85.5, 1265.0], [85.6, 1266.0], [85.7, 1266.0], [85.8, 1266.0], [85.9, 1266.0], [86.0, 1266.0], [86.1, 1267.0], [86.2, 1267.0], [86.3, 1267.0], [86.4, 1267.0], [86.5, 1268.0], [86.6, 1268.0], [86.7, 1269.0], [86.8, 1269.0], [86.9, 1269.0], [87.0, 1269.0], [87.1, 1270.0], [87.2, 1270.0], [87.3, 1270.0], [87.4, 1270.0], [87.5, 1271.0], [87.6, 1271.0], [87.7, 1271.0], [87.8, 1271.0], [87.9, 1272.0], [88.0, 1272.0], [88.1, 1272.0], [88.2, 1272.0], [88.3, 1273.0], [88.4, 1273.0], [88.5, 1273.0], [88.6, 1274.0], [88.7, 1274.0], [88.8, 1274.0], [88.9, 1275.0], [89.0, 1275.0], [89.1, 1275.0], [89.2, 1276.0], [89.3, 1276.0], [89.4, 1276.0], [89.5, 1277.0], [89.6, 1277.0], [89.7, 1277.0], [89.8, 1278.0], [89.9, 1278.0], [90.0, 1278.0], [90.1, 1279.0], [90.2, 1279.0], [90.3, 1279.0], [90.4, 1280.0], [90.5, 1280.0], [90.6, 1280.0], [90.7, 1281.0], [90.8, 1281.0], [90.9, 1282.0], [91.0, 1282.0], [91.1, 1282.0], [91.2, 1282.0], [91.3, 1283.0], [91.4, 1283.0], [91.5, 1284.0], [91.6, 1284.0], [91.7, 1285.0], [91.8, 1285.0], [91.9, 1285.0], [92.0, 1286.0], [92.1, 1286.0], [92.2, 1287.0], [92.3, 1287.0], [92.4, 1288.0], [92.5, 1288.0], [92.6, 1289.0], [92.7, 1290.0], [92.8, 1290.0], [92.9, 1291.0], [93.0, 1291.0], [93.1, 1292.0], [93.2, 1293.0], [93.3, 1294.0], [93.4, 1294.0], [93.5, 1295.0], [93.6, 1296.0], [93.7, 1296.0], [93.8, 1297.0], [93.9, 1298.0], [94.0, 1299.0], [94.1, 1301.0], [94.2, 1302.0], [94.3, 1303.0], [94.4, 1305.0], [94.5, 1306.0], [94.6, 1308.0], [94.7, 1310.0], [94.8, 1311.0], [94.9, 1312.0], [95.0, 1314.0], [95.1, 1315.0], [95.2, 1317.0], [95.3, 1319.0], [95.4, 1324.0], [95.5, 1326.0], [95.6, 1329.0], [95.7, 1333.0], [95.8, 1337.0], [95.9, 1340.0], [96.0, 1345.0], [96.1, 1352.0], [96.2, 1358.0], [96.3, 1363.0], [96.4, 1369.0], [96.5, 1375.0], [96.6, 1382.0], [96.7, 1387.0], [96.8, 1393.0], [96.9, 1398.0], [97.0, 1408.0], [97.1, 1417.0], [97.2, 1424.0], [97.3, 1436.0], [97.4, 1451.0], [97.5, 1498.0], [97.6, 1718.0], [97.7, 2001.0], [97.8, 2060.0], [97.9, 2078.0], [98.0, 2102.0], [98.1, 2124.0], [98.2, 2140.0], [98.3, 2169.0], [98.4, 2202.0], [98.5, 2226.0], [98.6, 2254.0], [98.7, 2285.0], [98.8, 2307.0], [98.9, 2326.0], [99.0, 2336.0], [99.1, 2349.0], [99.2, 2359.0], [99.3, 2366.0], [99.4, 2371.0], [99.5, 2377.0], [99.6, 2387.0], [99.7, 2407.0], [99.8, 2422.0], [99.9, 2586.0], [100.0, 3543.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 3941.0, "series": [{"data": [[0.0, 20.0], [600.0, 28.0], [700.0, 41.0], [800.0, 53.0], [900.0, 62.0], [1000.0, 1373.0], [1100.0, 3545.0], [1200.0, 3941.0], [1300.0, 290.0], [1400.0, 59.0], [1500.0, 7.0], [100.0, 251.0], [1700.0, 4.0], [1800.0, 1.0], [1900.0, 4.0], [2000.0, 31.0], [2100.0, 41.0], [2200.0, 39.0], [2300.0, 89.0], [2400.0, 21.0], [2500.0, 4.0], [2600.0, 3.0], [3000.0, 1.0], [3100.0, 1.0], [200.0, 21.0], [3300.0, 1.0], [3400.0, 1.0], [3500.0, 1.0], [300.0, 21.0], [400.0, 14.0], [500.0, 32.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 249.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 9424.0, "series": [{"data": [[0.0, 327.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 9424.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 249.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 76.97129186602876, "minX": 1.66522266E12, "maxY": 99.97493786246889, "series": [{"data": [[1.66522266E12, 99.4000000000001], [1.66522272E12, 99.97493786246889], [1.66522278E12, 76.97129186602876]], "isOverall": false, "label": "Get all users test", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66522278E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 48.0, "minX": 1.0, "maxY": 1490.4, "series": [{"data": [[2.0, 63.0], [3.0, 71.5], [4.0, 87.0], [5.0, 135.0], [6.0, 216.0], [7.0, 411.0], [8.0, 311.0], [9.0, 305.0], [10.0, 362.0], [11.0, 342.0], [12.0, 552.0], [13.0, 341.0], [14.0, 337.0], [15.0, 489.3333333333333], [16.0, 519.0], [17.0, 300.0], [18.0, 485.0], [19.0, 88.0], [20.0, 238.14285714285714], [21.0, 331.5], [22.0, 415.3333333333333], [23.0, 270.0], [24.0, 513.8], [25.0, 494.5], [26.0, 657.0], [27.0, 649.5], [28.0, 590.8], [29.0, 747.0], [30.0, 729.0], [31.0, 765.0], [33.0, 388.0], [32.0, 723.5], [35.0, 578.4545454545454], [37.0, 541.3333333333334], [36.0, 775.3333333333334], [39.0, 679.8], [38.0, 767.0], [41.0, 853.0], [40.0, 792.0], [43.0, 729.0], [42.0, 850.0], [45.0, 850.25], [44.0, 835.3333333333334], [47.0, 205.0], [46.0, 834.0], [48.0, 451.0], [49.0, 543.0], [51.0, 577.5], [50.0, 862.0], [53.0, 579.5], [52.0, 852.0], [55.0, 979.6363636363636], [54.0, 864.0], [57.0, 947.5], [56.0, 957.125], [59.0, 954.5], [58.0, 966.8], [60.0, 511.0], [61.0, 391.5], [62.0, 981.1111111111111], [63.0, 985.0], [64.0, 951.0000000000001], [66.0, 807.7142857142858], [67.0, 1047.5], [65.0, 1018.3333333333334], [71.0, 830.3333333333334], [69.0, 1227.0], [68.0, 1089.0], [72.0, 1042.4615384615383], [75.0, 904.3333333333334], [74.0, 1136.25], [73.0, 1054.4666666666667], [76.0, 1068.625], [77.0, 1076.3749999999998], [78.0, 797.25], [79.0, 1137.5], [80.0, 841.6250000000001], [83.0, 1201.0], [82.0, 1164.5], [81.0, 1140.4285714285713], [87.0, 1087.3333333333333], [86.0, 1216.125], [85.0, 1303.875], [84.0, 1184.4], [88.0, 1207.0714285714287], [89.0, 1373.25], [91.0, 1125.3684210526314], [90.0, 1273.125], [92.0, 1081.75], [93.0, 1158.4285714285713], [95.0, 1437.4285714285716], [94.0, 1279.3333333333333], [99.0, 1278.7199999999996], [98.0, 1296.4839999999988], [97.0, 1267.8846153846152], [96.0, 1490.4], [100.0, 1180.2383632820954], [1.0, 48.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[98.27129999999984, 1171.5796999999982]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1515.25, "minX": 1.66522266E12, "maxY": 7048558.133333334, "series": [{"data": [[1.66522266E12, 6635397.0], [1.66522272E12, 7048558.133333334], [1.66522278E12, 915378.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.66522266E12, 10983.75], [1.66522272E12, 11667.666666666666], [1.66522278E12, 1515.25]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66522278E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1106.8770077007723, "minX": 1.66522266E12, "maxY": 1239.9720381110164, "series": [{"data": [[1.66522266E12, 1106.8770077007723], [1.66522272E12, 1239.9720381110164], [1.66522278E12, 1113.9649122807011]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66522278E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1105.4446644664456, "minX": 1.66522266E12, "maxY": 1238.3378210439153, "series": [{"data": [[1.66522266E12, 1105.4446644664456], [1.66522272E12, 1238.3378210439153], [1.66522278E12, 1112.3365231259968]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66522278E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.66522266E12, "maxY": 0.016941694169416918, "series": [{"data": [[1.66522266E12, 0.016941694169416918], [1.66522272E12, 0.011184755592377782], [1.66522278E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66522278E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 47.0, "minX": 1.66522266E12, "maxY": 3543.0, "series": [{"data": [[1.66522266E12, 3149.0], [1.66522272E12, 3428.0], [1.66522278E12, 3543.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.66522266E12, 1186.0], [1.66522272E12, 1296.0], [1.66522278E12, 1294.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.66522266E12, 2125.08], [1.66522272E12, 2369.71], [1.66522278E12, 2421.88]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.66522266E12, 1202.6999999999998], [1.66522272E12, 1369.0], [1.66522278E12, 1327.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.66522266E12, 62.0], [1.66522272E12, 96.0], [1.66522278E12, 47.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.66522266E12, 1119.0], [1.66522272E12, 1238.0], [1.66522278E12, 1223.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66522278E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 154.0, "minX": 16.0, "maxY": 1375.5, "series": [{"data": [[68.0, 1375.5], [75.0, 1279.5], [73.0, 1111.0], [79.0, 1251.0], [78.0, 1266.0], [77.0, 1272.0], [76.0, 955.0], [83.0, 1199.0], [82.0, 1222.5], [81.0, 1227.0], [80.0, 1249.0], [87.0, 1126.0], [84.0, 1185.5], [85.0, 1179.0], [86.0, 1160.0], [89.0, 1117.0], [88.0, 1132.0], [91.0, 1115.0], [90.0, 1114.5], [95.0, 1093.0], [93.0, 1091.0], [92.0, 1079.0], [94.0, 1078.0], [16.0, 154.0], [20.0, 160.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 95.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 152.5, "minX": 16.0, "maxY": 1374.5, "series": [{"data": [[68.0, 1374.5], [75.0, 1277.5], [73.0, 1110.0], [79.0, 1249.0], [78.0, 1264.0], [77.0, 1271.0], [76.0, 953.0], [83.0, 1197.5], [82.0, 1221.0], [81.0, 1225.0], [80.0, 1247.0], [87.0, 1124.0], [84.0, 1184.0], [85.0, 1177.0], [86.0, 1159.0], [89.0, 1116.0], [88.0, 1131.0], [91.0, 1114.0], [90.0, 1113.0], [95.0, 1092.0], [93.0, 1090.0], [92.0, 1078.0], [94.0, 1076.5], [16.0, 152.5], [20.0, 158.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 95.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 8.816666666666666, "minX": 1.66522266E12, "maxY": 80.43333333333334, "series": [{"data": [[1.66522266E12, 77.41666666666667], [1.66522272E12, 80.43333333333334], [1.66522278E12, 8.816666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66522278E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 10.45, "minX": 1.66522266E12, "maxY": 80.46666666666667, "series": [{"data": [[1.66522266E12, 75.75], [1.66522272E12, 80.46666666666667], [1.66522278E12, 10.45]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66522278E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 10.45, "minX": 1.66522266E12, "maxY": 80.46666666666667, "series": [{"data": [[1.66522266E12, 75.75], [1.66522272E12, 80.46666666666667], [1.66522278E12, 10.45]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66522278E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 10.45, "minX": 1.66522266E12, "maxY": 80.46666666666667, "series": [{"data": [[1.66522266E12, 75.75], [1.66522272E12, 80.46666666666667], [1.66522278E12, 10.45]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66522278E12, "title": "Total Transactions Per Second"}},
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

