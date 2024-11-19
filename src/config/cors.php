<?php

return [
    'paths' => ['*'], // APIエンドポイントのみ対象
    'allowed_methods' => ['*'],
    'allowed_origins' => ['*'], // すべてのオリジンを許可
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => true,
];
