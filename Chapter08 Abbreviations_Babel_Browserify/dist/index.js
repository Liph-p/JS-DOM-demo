"use strict";

var _addLoadEvent = require("./addLoadEvent");

var _diaplayAbbreviations = require("./diaplayAbbreviations");

var _displayAccesskeys = require("./displayAccesskeys");

var _displayCitations = require("./displayCitations");

(0, _addLoadEvent.addLoadEvent)(_diaplayAbbreviations.displayAbbreviations);
(0, _addLoadEvent.addLoadEvent)(_displayAccesskeys.displayAccesskeys);
(0, _addLoadEvent.addLoadEvent)(_displayCitations.displayCitations);