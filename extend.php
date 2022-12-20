<?php

namespace Nearata\ResultsLimiter;

use Flarum\Api\Controller\ListDiscussionsController;
use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js'),

    (new Extend\ApiController(ListDiscussionsController::class))
        ->setLimit(10)
        ->setMaxLimit(10),
];
