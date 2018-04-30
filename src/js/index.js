import '../styles/index.scss';
import $ from 'jqueryVendor';
import 'jquery-lazyload';
$(function () { $('img.lazy').lazyload() });

import './filters';
import './app/nav';
import './app/category';
import './app/slide';
import './app/flash';
import './app/mobile';
import './app/pc';
import './app/recommend';
import './app/hots';
import './app/content';
import './app/video'