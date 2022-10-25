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
        data: {"result": {"minY": 55.0, "minX": 0.0, "maxY": 2719.0, "series": [{"data": [[0.0, 55.0], [0.1, 93.0], [0.2, 98.0], [0.3, 99.0], [0.4, 103.0], [0.5, 108.0], [0.6, 114.0], [0.7, 124.0], [0.8, 140.0], [0.9, 163.0], [1.0, 204.0], [1.1, 280.0], [1.2, 361.0], [1.3, 434.0], [1.4, 462.0], [1.5, 514.0], [1.6, 565.0], [1.7, 617.0], [1.8, 673.0], [1.9, 699.0], [2.0, 719.0], [2.1, 752.0], [2.2, 779.0], [2.3, 808.0], [2.4, 837.0], [2.5, 863.0], [2.6, 872.0], [2.7, 877.0], [2.8, 880.0], [2.9, 886.0], [3.0, 890.0], [3.1, 893.0], [3.2, 896.0], [3.3, 898.0], [3.4, 901.0], [3.5, 905.0], [3.6, 907.0], [3.7, 909.0], [3.8, 910.0], [3.9, 912.0], [4.0, 913.0], [4.1, 915.0], [4.2, 916.0], [4.3, 917.0], [4.4, 918.0], [4.5, 919.0], [4.6, 919.0], [4.7, 920.0], [4.8, 921.0], [4.9, 921.0], [5.0, 922.0], [5.1, 923.0], [5.2, 923.0], [5.3, 924.0], [5.4, 925.0], [5.5, 925.0], [5.6, 926.0], [5.7, 926.0], [5.8, 927.0], [5.9, 928.0], [6.0, 929.0], [6.1, 929.0], [6.2, 930.0], [6.3, 930.0], [6.4, 931.0], [6.5, 931.0], [6.6, 932.0], [6.7, 932.0], [6.8, 932.0], [6.9, 934.0], [7.0, 934.0], [7.1, 935.0], [7.2, 936.0], [7.3, 936.0], [7.4, 937.0], [7.5, 937.0], [7.6, 938.0], [7.7, 938.0], [7.8, 939.0], [7.9, 939.0], [8.0, 940.0], [8.1, 940.0], [8.2, 941.0], [8.3, 942.0], [8.4, 942.0], [8.5, 943.0], [8.6, 943.0], [8.7, 943.0], [8.8, 944.0], [8.9, 944.0], [9.0, 945.0], [9.1, 945.0], [9.2, 946.0], [9.3, 947.0], [9.4, 947.0], [9.5, 948.0], [9.6, 948.0], [9.7, 949.0], [9.8, 950.0], [9.9, 950.0], [10.0, 950.0], [10.1, 951.0], [10.2, 951.0], [10.3, 952.0], [10.4, 952.0], [10.5, 953.0], [10.6, 953.0], [10.7, 954.0], [10.8, 954.0], [10.9, 955.0], [11.0, 955.0], [11.1, 955.0], [11.2, 955.0], [11.3, 956.0], [11.4, 956.0], [11.5, 956.0], [11.6, 957.0], [11.7, 957.0], [11.8, 957.0], [11.9, 958.0], [12.0, 958.0], [12.1, 959.0], [12.2, 959.0], [12.3, 959.0], [12.4, 960.0], [12.5, 960.0], [12.6, 961.0], [12.7, 961.0], [12.8, 961.0], [12.9, 962.0], [13.0, 962.0], [13.1, 963.0], [13.2, 963.0], [13.3, 964.0], [13.4, 964.0], [13.5, 964.0], [13.6, 965.0], [13.7, 965.0], [13.8, 965.0], [13.9, 966.0], [14.0, 966.0], [14.1, 966.0], [14.2, 967.0], [14.3, 967.0], [14.4, 968.0], [14.5, 968.0], [14.6, 968.0], [14.7, 969.0], [14.8, 969.0], [14.9, 969.0], [15.0, 969.0], [15.1, 970.0], [15.2, 970.0], [15.3, 970.0], [15.4, 971.0], [15.5, 971.0], [15.6, 972.0], [15.7, 972.0], [15.8, 972.0], [15.9, 973.0], [16.0, 973.0], [16.1, 974.0], [16.2, 974.0], [16.3, 975.0], [16.4, 975.0], [16.5, 976.0], [16.6, 976.0], [16.7, 977.0], [16.8, 977.0], [16.9, 977.0], [17.0, 978.0], [17.1, 978.0], [17.2, 978.0], [17.3, 979.0], [17.4, 979.0], [17.5, 980.0], [17.6, 980.0], [17.7, 980.0], [17.8, 980.0], [17.9, 981.0], [18.0, 981.0], [18.1, 981.0], [18.2, 981.0], [18.3, 982.0], [18.4, 982.0], [18.5, 983.0], [18.6, 983.0], [18.7, 983.0], [18.8, 984.0], [18.9, 984.0], [19.0, 984.0], [19.1, 985.0], [19.2, 985.0], [19.3, 985.0], [19.4, 986.0], [19.5, 986.0], [19.6, 986.0], [19.7, 987.0], [19.8, 987.0], [19.9, 987.0], [20.0, 987.0], [20.1, 988.0], [20.2, 988.0], [20.3, 988.0], [20.4, 988.0], [20.5, 989.0], [20.6, 989.0], [20.7, 990.0], [20.8, 990.0], [20.9, 990.0], [21.0, 990.0], [21.1, 991.0], [21.2, 991.0], [21.3, 991.0], [21.4, 991.0], [21.5, 992.0], [21.6, 992.0], [21.7, 992.0], [21.8, 993.0], [21.9, 993.0], [22.0, 993.0], [22.1, 994.0], [22.2, 994.0], [22.3, 994.0], [22.4, 994.0], [22.5, 994.0], [22.6, 995.0], [22.7, 995.0], [22.8, 995.0], [22.9, 996.0], [23.0, 996.0], [23.1, 996.0], [23.2, 996.0], [23.3, 997.0], [23.4, 997.0], [23.5, 997.0], [23.6, 997.0], [23.7, 998.0], [23.8, 998.0], [23.9, 998.0], [24.0, 998.0], [24.1, 998.0], [24.2, 998.0], [24.3, 999.0], [24.4, 999.0], [24.5, 999.0], [24.6, 999.0], [24.7, 999.0], [24.8, 1000.0], [24.9, 1000.0], [25.0, 1000.0], [25.1, 1000.0], [25.2, 1001.0], [25.3, 1001.0], [25.4, 1001.0], [25.5, 1001.0], [25.6, 1002.0], [25.7, 1002.0], [25.8, 1002.0], [25.9, 1002.0], [26.0, 1003.0], [26.1, 1003.0], [26.2, 1003.0], [26.3, 1003.0], [26.4, 1004.0], [26.5, 1004.0], [26.6, 1004.0], [26.7, 1004.0], [26.8, 1004.0], [26.9, 1005.0], [27.0, 1005.0], [27.1, 1005.0], [27.2, 1005.0], [27.3, 1006.0], [27.4, 1006.0], [27.5, 1006.0], [27.6, 1006.0], [27.7, 1007.0], [27.8, 1007.0], [27.9, 1007.0], [28.0, 1007.0], [28.1, 1007.0], [28.2, 1008.0], [28.3, 1008.0], [28.4, 1008.0], [28.5, 1008.0], [28.6, 1009.0], [28.7, 1009.0], [28.8, 1009.0], [28.9, 1010.0], [29.0, 1010.0], [29.1, 1010.0], [29.2, 1010.0], [29.3, 1011.0], [29.4, 1011.0], [29.5, 1011.0], [29.6, 1011.0], [29.7, 1012.0], [29.8, 1012.0], [29.9, 1012.0], [30.0, 1012.0], [30.1, 1012.0], [30.2, 1012.0], [30.3, 1013.0], [30.4, 1013.0], [30.5, 1013.0], [30.6, 1013.0], [30.7, 1014.0], [30.8, 1014.0], [30.9, 1014.0], [31.0, 1014.0], [31.1, 1015.0], [31.2, 1015.0], [31.3, 1015.0], [31.4, 1015.0], [31.5, 1015.0], [31.6, 1016.0], [31.7, 1016.0], [31.8, 1016.0], [31.9, 1017.0], [32.0, 1017.0], [32.1, 1017.0], [32.2, 1017.0], [32.3, 1017.0], [32.4, 1018.0], [32.5, 1018.0], [32.6, 1018.0], [32.7, 1018.0], [32.8, 1019.0], [32.9, 1019.0], [33.0, 1019.0], [33.1, 1019.0], [33.2, 1019.0], [33.3, 1019.0], [33.4, 1020.0], [33.5, 1020.0], [33.6, 1020.0], [33.7, 1020.0], [33.8, 1021.0], [33.9, 1021.0], [34.0, 1021.0], [34.1, 1021.0], [34.2, 1021.0], [34.3, 1021.0], [34.4, 1021.0], [34.5, 1022.0], [34.6, 1022.0], [34.7, 1022.0], [34.8, 1022.0], [34.9, 1023.0], [35.0, 1023.0], [35.1, 1023.0], [35.2, 1023.0], [35.3, 1023.0], [35.4, 1024.0], [35.5, 1024.0], [35.6, 1024.0], [35.7, 1024.0], [35.8, 1024.0], [35.9, 1025.0], [36.0, 1025.0], [36.1, 1025.0], [36.2, 1025.0], [36.3, 1025.0], [36.4, 1026.0], [36.5, 1026.0], [36.6, 1026.0], [36.7, 1026.0], [36.8, 1026.0], [36.9, 1027.0], [37.0, 1027.0], [37.1, 1027.0], [37.2, 1027.0], [37.3, 1027.0], [37.4, 1027.0], [37.5, 1028.0], [37.6, 1028.0], [37.7, 1028.0], [37.8, 1028.0], [37.9, 1028.0], [38.0, 1029.0], [38.1, 1029.0], [38.2, 1029.0], [38.3, 1029.0], [38.4, 1029.0], [38.5, 1029.0], [38.6, 1030.0], [38.7, 1030.0], [38.8, 1030.0], [38.9, 1030.0], [39.0, 1031.0], [39.1, 1031.0], [39.2, 1031.0], [39.3, 1031.0], [39.4, 1031.0], [39.5, 1032.0], [39.6, 1032.0], [39.7, 1032.0], [39.8, 1032.0], [39.9, 1032.0], [40.0, 1033.0], [40.1, 1033.0], [40.2, 1033.0], [40.3, 1033.0], [40.4, 1034.0], [40.5, 1034.0], [40.6, 1034.0], [40.7, 1034.0], [40.8, 1035.0], [40.9, 1035.0], [41.0, 1035.0], [41.1, 1035.0], [41.2, 1035.0], [41.3, 1035.0], [41.4, 1036.0], [41.5, 1036.0], [41.6, 1036.0], [41.7, 1036.0], [41.8, 1036.0], [41.9, 1037.0], [42.0, 1037.0], [42.1, 1037.0], [42.2, 1037.0], [42.3, 1037.0], [42.4, 1038.0], [42.5, 1038.0], [42.6, 1038.0], [42.7, 1038.0], [42.8, 1038.0], [42.9, 1039.0], [43.0, 1039.0], [43.1, 1039.0], [43.2, 1039.0], [43.3, 1039.0], [43.4, 1040.0], [43.5, 1040.0], [43.6, 1040.0], [43.7, 1040.0], [43.8, 1041.0], [43.9, 1041.0], [44.0, 1041.0], [44.1, 1041.0], [44.2, 1042.0], [44.3, 1042.0], [44.4, 1042.0], [44.5, 1042.0], [44.6, 1042.0], [44.7, 1043.0], [44.8, 1043.0], [44.9, 1043.0], [45.0, 1043.0], [45.1, 1044.0], [45.2, 1044.0], [45.3, 1044.0], [45.4, 1045.0], [45.5, 1045.0], [45.6, 1045.0], [45.7, 1045.0], [45.8, 1045.0], [45.9, 1046.0], [46.0, 1046.0], [46.1, 1046.0], [46.2, 1046.0], [46.3, 1047.0], [46.4, 1047.0], [46.5, 1047.0], [46.6, 1047.0], [46.7, 1048.0], [46.8, 1048.0], [46.9, 1048.0], [47.0, 1048.0], [47.1, 1049.0], [47.2, 1049.0], [47.3, 1049.0], [47.4, 1049.0], [47.5, 1049.0], [47.6, 1050.0], [47.7, 1050.0], [47.8, 1050.0], [47.9, 1050.0], [48.0, 1051.0], [48.1, 1051.0], [48.2, 1051.0], [48.3, 1051.0], [48.4, 1051.0], [48.5, 1052.0], [48.6, 1052.0], [48.7, 1052.0], [48.8, 1052.0], [48.9, 1052.0], [49.0, 1053.0], [49.1, 1053.0], [49.2, 1053.0], [49.3, 1053.0], [49.4, 1053.0], [49.5, 1054.0], [49.6, 1054.0], [49.7, 1054.0], [49.8, 1054.0], [49.9, 1055.0], [50.0, 1055.0], [50.1, 1055.0], [50.2, 1055.0], [50.3, 1056.0], [50.4, 1056.0], [50.5, 1056.0], [50.6, 1056.0], [50.7, 1056.0], [50.8, 1056.0], [50.9, 1057.0], [51.0, 1057.0], [51.1, 1057.0], [51.2, 1057.0], [51.3, 1057.0], [51.4, 1058.0], [51.5, 1058.0], [51.6, 1058.0], [51.7, 1058.0], [51.8, 1058.0], [51.9, 1059.0], [52.0, 1059.0], [52.1, 1059.0], [52.2, 1059.0], [52.3, 1060.0], [52.4, 1060.0], [52.5, 1060.0], [52.6, 1060.0], [52.7, 1060.0], [52.8, 1061.0], [52.9, 1061.0], [53.0, 1061.0], [53.1, 1061.0], [53.2, 1061.0], [53.3, 1061.0], [53.4, 1062.0], [53.5, 1062.0], [53.6, 1062.0], [53.7, 1062.0], [53.8, 1063.0], [53.9, 1063.0], [54.0, 1063.0], [54.1, 1063.0], [54.2, 1064.0], [54.3, 1064.0], [54.4, 1064.0], [54.5, 1064.0], [54.6, 1064.0], [54.7, 1064.0], [54.8, 1065.0], [54.9, 1065.0], [55.0, 1065.0], [55.1, 1065.0], [55.2, 1066.0], [55.3, 1066.0], [55.4, 1066.0], [55.5, 1066.0], [55.6, 1066.0], [55.7, 1067.0], [55.8, 1067.0], [55.9, 1067.0], [56.0, 1067.0], [56.1, 1068.0], [56.2, 1068.0], [56.3, 1068.0], [56.4, 1068.0], [56.5, 1069.0], [56.6, 1069.0], [56.7, 1069.0], [56.8, 1069.0], [56.9, 1069.0], [57.0, 1070.0], [57.1, 1070.0], [57.2, 1070.0], [57.3, 1070.0], [57.4, 1071.0], [57.5, 1071.0], [57.6, 1071.0], [57.7, 1071.0], [57.8, 1071.0], [57.9, 1072.0], [58.0, 1072.0], [58.1, 1072.0], [58.2, 1073.0], [58.3, 1073.0], [58.4, 1073.0], [58.5, 1073.0], [58.6, 1074.0], [58.7, 1074.0], [58.8, 1074.0], [58.9, 1074.0], [59.0, 1074.0], [59.1, 1075.0], [59.2, 1075.0], [59.3, 1075.0], [59.4, 1075.0], [59.5, 1076.0], [59.6, 1076.0], [59.7, 1076.0], [59.8, 1077.0], [59.9, 1077.0], [60.0, 1077.0], [60.1, 1078.0], [60.2, 1078.0], [60.3, 1078.0], [60.4, 1078.0], [60.5, 1079.0], [60.6, 1079.0], [60.7, 1079.0], [60.8, 1079.0], [60.9, 1079.0], [61.0, 1080.0], [61.1, 1080.0], [61.2, 1080.0], [61.3, 1080.0], [61.4, 1081.0], [61.5, 1081.0], [61.6, 1081.0], [61.7, 1081.0], [61.8, 1082.0], [61.9, 1082.0], [62.0, 1082.0], [62.1, 1082.0], [62.2, 1082.0], [62.3, 1083.0], [62.4, 1083.0], [62.5, 1083.0], [62.6, 1083.0], [62.7, 1084.0], [62.8, 1084.0], [62.9, 1084.0], [63.0, 1084.0], [63.1, 1085.0], [63.2, 1085.0], [63.3, 1085.0], [63.4, 1085.0], [63.5, 1086.0], [63.6, 1086.0], [63.7, 1086.0], [63.8, 1086.0], [63.9, 1086.0], [64.0, 1087.0], [64.1, 1087.0], [64.2, 1087.0], [64.3, 1087.0], [64.4, 1088.0], [64.5, 1088.0], [64.6, 1088.0], [64.7, 1089.0], [64.8, 1089.0], [64.9, 1089.0], [65.0, 1089.0], [65.1, 1090.0], [65.2, 1090.0], [65.3, 1090.0], [65.4, 1090.0], [65.5, 1091.0], [65.6, 1091.0], [65.7, 1091.0], [65.8, 1091.0], [65.9, 1092.0], [66.0, 1092.0], [66.1, 1092.0], [66.2, 1093.0], [66.3, 1093.0], [66.4, 1093.0], [66.5, 1093.0], [66.6, 1094.0], [66.7, 1094.0], [66.8, 1094.0], [66.9, 1095.0], [67.0, 1095.0], [67.1, 1095.0], [67.2, 1095.0], [67.3, 1096.0], [67.4, 1096.0], [67.5, 1096.0], [67.6, 1097.0], [67.7, 1097.0], [67.8, 1097.0], [67.9, 1097.0], [68.0, 1098.0], [68.1, 1098.0], [68.2, 1098.0], [68.3, 1099.0], [68.4, 1099.0], [68.5, 1099.0], [68.6, 1100.0], [68.7, 1100.0], [68.8, 1100.0], [68.9, 1101.0], [69.0, 1101.0], [69.1, 1101.0], [69.2, 1102.0], [69.3, 1102.0], [69.4, 1102.0], [69.5, 1103.0], [69.6, 1103.0], [69.7, 1104.0], [69.8, 1104.0], [69.9, 1104.0], [70.0, 1105.0], [70.1, 1105.0], [70.2, 1105.0], [70.3, 1106.0], [70.4, 1106.0], [70.5, 1106.0], [70.6, 1107.0], [70.7, 1107.0], [70.8, 1107.0], [70.9, 1108.0], [71.0, 1108.0], [71.1, 1108.0], [71.2, 1109.0], [71.3, 1109.0], [71.4, 1110.0], [71.5, 1110.0], [71.6, 1110.0], [71.7, 1111.0], [71.8, 1111.0], [71.9, 1112.0], [72.0, 1112.0], [72.1, 1113.0], [72.2, 1113.0], [72.3, 1113.0], [72.4, 1114.0], [72.5, 1115.0], [72.6, 1115.0], [72.7, 1116.0], [72.8, 1117.0], [72.9, 1117.0], [73.0, 1118.0], [73.1, 1118.0], [73.2, 1119.0], [73.3, 1119.0], [73.4, 1120.0], [73.5, 1120.0], [73.6, 1121.0], [73.7, 1121.0], [73.8, 1122.0], [73.9, 1123.0], [74.0, 1123.0], [74.1, 1124.0], [74.2, 1124.0], [74.3, 1125.0], [74.4, 1125.0], [74.5, 1126.0], [74.6, 1126.0], [74.7, 1126.0], [74.8, 1127.0], [74.9, 1128.0], [75.0, 1128.0], [75.1, 1129.0], [75.2, 1130.0], [75.3, 1130.0], [75.4, 1131.0], [75.5, 1131.0], [75.6, 1132.0], [75.7, 1133.0], [75.8, 1133.0], [75.9, 1134.0], [76.0, 1134.0], [76.1, 1135.0], [76.2, 1136.0], [76.3, 1136.0], [76.4, 1137.0], [76.5, 1137.0], [76.6, 1138.0], [76.7, 1138.0], [76.8, 1139.0], [76.9, 1139.0], [77.0, 1140.0], [77.1, 1141.0], [77.2, 1142.0], [77.3, 1142.0], [77.4, 1143.0], [77.5, 1145.0], [77.6, 1145.0], [77.7, 1146.0], [77.8, 1147.0], [77.9, 1148.0], [78.0, 1148.0], [78.1, 1150.0], [78.2, 1151.0], [78.3, 1152.0], [78.4, 1153.0], [78.5, 1154.0], [78.6, 1155.0], [78.7, 1156.0], [78.8, 1157.0], [78.9, 1158.0], [79.0, 1159.0], [79.1, 1160.0], [79.2, 1161.0], [79.3, 1163.0], [79.4, 1164.0], [79.5, 1165.0], [79.6, 1167.0], [79.7, 1170.0], [79.8, 1170.0], [79.9, 1172.0], [80.0, 1174.0], [80.1, 1176.0], [80.2, 1177.0], [80.3, 1178.0], [80.4, 1179.0], [80.5, 1181.0], [80.6, 1183.0], [80.7, 1185.0], [80.8, 1187.0], [80.9, 1188.0], [81.0, 1190.0], [81.1, 1192.0], [81.2, 1194.0], [81.3, 1195.0], [81.4, 1197.0], [81.5, 1201.0], [81.6, 1206.0], [81.7, 1208.0], [81.8, 1212.0], [81.9, 1216.0], [82.0, 1221.0], [82.1, 1228.0], [82.2, 1236.0], [82.3, 1241.0], [82.4, 1244.0], [82.5, 1251.0], [82.6, 1262.0], [82.7, 1270.0], [82.8, 1275.0], [82.9, 1282.0], [83.0, 1291.0], [83.1, 1296.0], [83.2, 1306.0], [83.3, 1315.0], [83.4, 1320.0], [83.5, 1325.0], [83.6, 1335.0], [83.7, 1343.0], [83.8, 1352.0], [83.9, 1361.0], [84.0, 1376.0], [84.1, 1391.0], [84.2, 1406.0], [84.3, 1415.0], [84.4, 1428.0], [84.5, 1444.0], [84.6, 1458.0], [84.7, 1467.0], [84.8, 1480.0], [84.9, 1498.0], [85.0, 1507.0], [85.1, 1519.0], [85.2, 1525.0], [85.3, 1532.0], [85.4, 1536.0], [85.5, 1542.0], [85.6, 1546.0], [85.7, 1550.0], [85.8, 1554.0], [85.9, 1557.0], [86.0, 1560.0], [86.1, 1561.0], [86.2, 1562.0], [86.3, 1564.0], [86.4, 1565.0], [86.5, 1567.0], [86.6, 1569.0], [86.7, 1570.0], [86.8, 1571.0], [86.9, 1572.0], [87.0, 1574.0], [87.1, 1576.0], [87.2, 1578.0], [87.3, 1579.0], [87.4, 1580.0], [87.5, 1582.0], [87.6, 1583.0], [87.7, 1584.0], [87.8, 1585.0], [87.9, 1585.0], [88.0, 1586.0], [88.1, 1587.0], [88.2, 1588.0], [88.3, 1589.0], [88.4, 1591.0], [88.5, 1591.0], [88.6, 1592.0], [88.7, 1593.0], [88.8, 1594.0], [88.9, 1595.0], [89.0, 1595.0], [89.1, 1596.0], [89.2, 1597.0], [89.3, 1597.0], [89.4, 1598.0], [89.5, 1598.0], [89.6, 1599.0], [89.7, 1599.0], [89.8, 1600.0], [89.9, 1600.0], [90.0, 1600.0], [90.1, 1601.0], [90.2, 1601.0], [90.3, 1602.0], [90.4, 1602.0], [90.5, 1603.0], [90.6, 1603.0], [90.7, 1604.0], [90.8, 1604.0], [90.9, 1605.0], [91.0, 1606.0], [91.1, 1606.0], [91.2, 1607.0], [91.3, 1607.0], [91.4, 1608.0], [91.5, 1608.0], [91.6, 1609.0], [91.7, 1609.0], [91.8, 1609.0], [91.9, 1610.0], [92.0, 1611.0], [92.1, 1611.0], [92.2, 1612.0], [92.3, 1612.0], [92.4, 1613.0], [92.5, 1613.0], [92.6, 1614.0], [92.7, 1614.0], [92.8, 1615.0], [92.9, 1615.0], [93.0, 1616.0], [93.1, 1616.0], [93.2, 1617.0], [93.3, 1617.0], [93.4, 1618.0], [93.5, 1618.0], [93.6, 1619.0], [93.7, 1619.0], [93.8, 1620.0], [93.9, 1621.0], [94.0, 1621.0], [94.1, 1622.0], [94.2, 1622.0], [94.3, 1623.0], [94.4, 1624.0], [94.5, 1624.0], [94.6, 1625.0], [94.7, 1626.0], [94.8, 1627.0], [94.9, 1627.0], [95.0, 1628.0], [95.1, 1629.0], [95.2, 1629.0], [95.3, 1630.0], [95.4, 1631.0], [95.5, 1632.0], [95.6, 1632.0], [95.7, 1633.0], [95.8, 1634.0], [95.9, 1635.0], [96.0, 1635.0], [96.1, 1636.0], [96.2, 1637.0], [96.3, 1638.0], [96.4, 1639.0], [96.5, 1640.0], [96.6, 1641.0], [96.7, 1643.0], [96.8, 1644.0], [96.9, 1645.0], [97.0, 1646.0], [97.1, 1648.0], [97.2, 1649.0], [97.3, 1651.0], [97.4, 1654.0], [97.5, 1655.0], [97.6, 1657.0], [97.7, 1660.0], [97.8, 1662.0], [97.9, 1664.0], [98.0, 1666.0], [98.1, 1670.0], [98.2, 1677.0], [98.3, 1684.0], [98.4, 1720.0], [98.5, 1750.0], [98.6, 1812.0], [98.7, 1862.0], [98.8, 1912.0], [98.9, 1933.0], [99.0, 1957.0], [99.1, 1998.0], [99.2, 2034.0], [99.3, 2063.0], [99.4, 2105.0], [99.5, 2334.0], [99.6, 2497.0], [99.7, 2529.0], [99.8, 2558.0], [99.9, 2588.0], [100.0, 2719.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 4381.0, "series": [{"data": [[0.0, 31.0], [600.0, 25.0], [700.0, 36.0], [800.0, 109.0], [900.0, 2138.0], [1000.0, 4381.0], [1100.0, 1289.0], [1200.0, 168.0], [1300.0, 103.0], [1400.0, 75.0], [1500.0, 486.0], [100.0, 68.0], [1600.0, 859.0], [1700.0, 24.0], [1800.0, 18.0], [1900.0, 34.0], [2000.0, 28.0], [2100.0, 3.0], [2300.0, 7.0], [2200.0, 4.0], [2400.0, 8.0], [2500.0, 34.0], [2600.0, 4.0], [2700.0, 1.0], [200.0, 14.0], [300.0, 13.0], [400.0, 22.0], [500.0, 18.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 148.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 8342.0, "series": [{"data": [[0.0, 148.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 8342.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1510.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 96.63769889840876, "minX": 1.66522302E12, "maxY": 100.0, "series": [{"data": [[1.66522314E12, 96.63769889840876], [1.66522302E12, 99.78224582701066], [1.66522308E12, 100.0]], "isOverall": false, "label": "Get all users test", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66522314E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 87.0, "minX": 1.0, "maxY": 1649.8095238095239, "series": [{"data": [[2.0, 594.5], [3.0, 599.0], [4.0, 719.0], [5.0, 604.0], [6.0, 699.0], [7.0, 298.0], [9.0, 261.6666666666667], [10.0, 432.0], [11.0, 305.0], [12.0, 371.5], [14.0, 371.5], [15.0, 422.3333333333333], [16.0, 449.0], [17.0, 458.0], [18.0, 460.0], [19.0, 452.0], [20.0, 476.0], [21.0, 483.0], [22.0, 474.0], [23.0, 541.0], [24.0, 510.0], [25.0, 576.0], [26.0, 618.3333333333334], [27.0, 549.0], [28.0, 664.0], [29.0, 1067.0], [30.0, 690.2857142857143], [31.0, 708.0], [33.0, 704.5], [32.0, 729.0], [35.0, 779.6666666666666], [34.0, 749.0], [37.0, 703.0], [36.0, 706.0], [39.0, 794.5], [38.0, 803.3333333333334], [41.0, 955.6666666666666], [40.0, 799.0], [43.0, 873.0], [42.0, 835.0], [44.0, 898.5], [47.0, 1010.0], [46.0, 785.6666666666666], [49.0, 918.75], [48.0, 919.0], [51.0, 973.0], [50.0, 527.0], [53.0, 900.0], [52.0, 972.0], [55.0, 933.5], [54.0, 965.0], [57.0, 932.0], [56.0, 996.2], [59.0, 998.0], [58.0, 948.5], [61.0, 1125.0], [60.0, 1004.0], [63.0, 989.0], [62.0, 1013.0], [67.0, 999.0], [66.0, 1018.0], [65.0, 986.0], [64.0, 957.0], [71.0, 1055.0], [70.0, 1056.0], [69.0, 1034.0], [68.0, 1181.142857142857], [72.0, 915.4444444444443], [74.0, 920.0], [75.0, 978.6666666666666], [73.0, 1104.5], [79.0, 1097.142857142857], [78.0, 1083.0], [77.0, 1112.0], [76.0, 1108.5], [81.0, 750.6666666666666], [83.0, 1119.8333333333335], [82.0, 1095.0], [80.0, 1100.6666666666667], [84.0, 1056.0], [86.0, 981.0666666666666], [87.0, 1145.5], [85.0, 1273.5384615384617], [89.0, 914.1666666666666], [90.0, 1090.2608695652177], [91.0, 1083.5714285714284], [88.0, 1143.9999999999998], [95.0, 1244.3], [94.0, 1105.5], [93.0, 1080.5882352941176], [92.0, 950.8333333333334], [99.0, 1283.9433962264143], [98.0, 1472.2727272727273], [97.0, 1649.8095238095239], [96.0, 1069.6206896551723], [100.0, 1127.2297953154673], [1.0, 87.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[98.87250000000023, 1125.6222000000034]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3185.1666666666665, "minX": 1.66522302E12, "maxY": 7904079.066666666, "series": [{"data": [[1.66522314E12, 4771062.133333334], [1.66522302E12, 1924192.1333333333], [1.66522308E12, 7904079.066666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.66522314E12, 7897.666666666667], [1.66522302E12, 3185.1666666666665], [1.66522308E12, 13083.833333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66522314E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1070.8535660091045, "minX": 1.66522302E12, "maxY": 1176.601897184819, "series": [{"data": [[1.66522314E12, 1176.601897184819], [1.66522302E12, 1070.8535660091045], [1.66522308E12, 1108.1828592537854]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66522314E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1067.5652503793647, "minX": 1.66522302E12, "maxY": 1174.5566095471238, "series": [{"data": [[1.66522314E12, 1174.5566095471238], [1.66522302E12, 1067.5652503793647], [1.66522308E12, 1105.8335796084227]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66522314E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.66522302E12, "maxY": 0.03414264036418807, "series": [{"data": [[1.66522314E12, 0.0], [1.66522302E12, 0.03414264036418807], [1.66522308E12, 0.009604728481714076]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66522314E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 55.0, "minX": 1.66522302E12, "maxY": 2719.0, "series": [{"data": [[1.66522314E12, 2593.0], [1.66522302E12, 2334.0], [1.66522308E12, 2719.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.66522314E12, 1620.0], [1.66522302E12, 1306.800000000001], [1.66522308E12, 1585.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.66522314E12, 2037.9299999999998], [1.66522302E12, 1894.9099999999994], [1.66522308E12, 1974.8500000000076]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.66522314E12, 1640.0], [1.66522302E12, 1504.0], [1.66522308E12, 1619.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.66522314E12, 87.0], [1.66522302E12, 55.0], [1.66522308E12, 78.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.66522314E12, 1083.0], [1.66522302E12, 1026.0], [1.66522308E12, 1032.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66522314E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 374.0, "minX": 19.0, "maxY": 1630.0, "series": [{"data": [[41.0, 1630.0], [43.0, 1210.0], [42.0, 1075.5], [44.0, 1532.0], [45.0, 1054.0], [47.0, 1020.0], [49.0, 999.0], [53.0, 1000.0], [57.0, 1091.0], [61.0, 1630.0], [64.0, 1598.0], [71.0, 1316.0], [69.0, 1045.0], [70.0, 1048.0], [74.0, 1093.5], [73.0, 1031.0], [77.0, 1620.0], [83.0, 1023.5], [82.0, 1126.0], [86.0, 1071.5], [85.0, 1565.5], [84.0, 1125.0], [87.0, 1089.0], [89.0, 1068.0], [90.0, 1226.0], [91.0, 1090.0], [88.0, 1109.0], [95.0, 1057.0], [94.0, 1070.0], [92.0, 1082.0], [93.0, 1080.0], [97.0, 1060.5], [96.0, 1048.5], [99.0, 1012.0], [98.0, 1000.0], [100.0, 1006.0], [101.0, 1007.5], [103.0, 958.5], [102.0, 942.5], [104.0, 952.5], [105.0, 930.0], [106.0, 993.0], [108.0, 935.5], [19.0, 374.0], [31.0, 779.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 108.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 370.0, "minX": 19.0, "maxY": 1628.0, "series": [{"data": [[41.0, 1628.0], [43.0, 1175.0], [42.0, 1074.0], [44.0, 1530.5], [45.0, 1052.5], [47.0, 1018.0], [49.0, 997.0], [53.0, 998.0], [57.0, 1089.0], [61.0, 1628.0], [64.0, 1595.5], [71.0, 1315.0], [69.0, 1043.0], [70.0, 1046.0], [74.0, 1089.5], [73.0, 1029.0], [77.0, 1618.0], [83.0, 1012.0], [82.0, 1124.5], [86.0, 1070.0], [85.0, 1563.5], [84.0, 1122.0], [87.0, 1088.0], [89.0, 1066.0], [90.0, 1218.0], [91.0, 1088.0], [88.0, 1107.0], [95.0, 1055.0], [94.0, 1068.0], [92.0, 1080.0], [93.0, 1078.0], [97.0, 1058.5], [96.0, 1046.5], [99.0, 1010.0], [98.0, 999.0], [100.0, 1003.5], [101.0, 1006.0], [103.0, 956.5], [102.0, 941.0], [104.0, 951.0], [105.0, 929.0], [106.0, 991.5], [108.0, 934.0], [19.0, 370.0], [31.0, 770.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 108.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 23.633333333333333, "minX": 1.66522302E12, "maxY": 90.23333333333333, "series": [{"data": [[1.66522314E12, 52.8], [1.66522302E12, 23.633333333333333], [1.66522308E12, 90.23333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66522314E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 21.966666666666665, "minX": 1.66522302E12, "maxY": 90.23333333333333, "series": [{"data": [[1.66522314E12, 54.46666666666667], [1.66522302E12, 21.966666666666665], [1.66522308E12, 90.23333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66522314E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 21.966666666666665, "minX": 1.66522302E12, "maxY": 90.23333333333333, "series": [{"data": [[1.66522314E12, 54.46666666666667], [1.66522302E12, 21.966666666666665], [1.66522308E12, 90.23333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66522314E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 21.966666666666665, "minX": 1.66522302E12, "maxY": 90.23333333333333, "series": [{"data": [[1.66522314E12, 54.46666666666667], [1.66522302E12, 21.966666666666665], [1.66522308E12, 90.23333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66522314E12, "title": "Total Transactions Per Second"}},
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

