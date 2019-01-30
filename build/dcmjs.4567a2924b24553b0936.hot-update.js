webpackHotUpdatedcmjs("dcmjs",{

/***/ "./adapters/Cornerstone/Segmentation.js":
/*!**********************************************!*\
  !*** ./adapters/Cornerstone/Segmentation.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Segmentation = function () {
  function Segmentation() {
    _classCallCheck(this, Segmentation);
  }

  _createClass(Segmentation, null, [{
    key: "generateToolState",
    value: function generateToolState(stackOfImages, toolState) {}
  }, {
    key: "readToolState",
    value: function readToolState(imageIds, arrayBuffer) {
      dicomData = dcmjs.data.DicomMessage.readFile(arrayBuffer);
      var dataset = dcmjs.data.DicomMetaDictionary.naturalizeDataset(dicomData.dict);
      dataset._meta = dcmjs.data.DicomMetaDictionary.namifyDataset(dicomData.meta);
      multiframe = dcmjs.normalizers.Normalizer.normalizeToDataset([dataset]);

      var segmentSequence = multiframe.SegmentSequence;

      if (Array.isArray(segmentSequence)) {
        for (var i = 0; i < segmentSequence.length; i++) {
          var segment = segmentSequence[i];

          this._setSegMetadata(i, segment);
          /*
          for (let j = 0; j < dimensions.cube; j++) {
            mask[j] = pixelData[i * dimensions.cube + j];
          }
          */
        }
      } else {
        // Only one segment, will be stored as an object.
        var _segment = segmentSequence;
        var mask = [];

        this._setSegMetadata(0, _segment);

        for (var j = 0; j < dimensions.cube; j++) {
          mask[j] = pixelData[j];
        }

        this._masks.push(mask);
      }

      /*
      const { globalImageIdSpecificToolStateManager } = cornerstoneTools;
       for (let i = 0; i < imageIds.length; i++) {
        const imageId = imageIds[i];
        const byteOffset = width * height * i;
        const length = width * height;
        const slicePixelData = new Uint8ClampedArray(buffer, byteOffset, length);
         const toolData = [];
        toolData[segmentationIndex] = {
          pixelData: slicePixelData,
          invalidated: true
        };
         const toolState =
          globalImageIdSpecificToolStateManager.saveImageIdToolState(imageId) ||
          {};
         toolState[toolType] = {
          data: toolData
        };
         globalImageIdSpecificToolStateManager.restoreImageIdToolState(
          imageId,
          toolState
        );
      }
      */
    }
  }]);

  return Segmentation;
}();

exports.default = Segmentation;

/***/ })

})
//# sourceMappingURL=dcmjs.4567a2924b24553b0936.hot-update.js.map