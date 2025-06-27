// sap.ui.define([], function () {
//     "use strict";
  
//     return {
//       getRandomColor: function () {
//         var colors = ["Red", "Green", "Blue", "Purple", "Orange"];
//         var index = Math.floor(Math.random() * colors.length);
//         return colors[index];
//       }
//     };
//   });

sap.ui.define([], function () {
    "use strict";
  
    return {
      // Example: make IDs starting with 1 appear black, others red
      formatIdColor: function (id) {
        if (!id) return;
        return id.startsWith("1") ? "black" : "red";
      }
    };
  });
  
  
  