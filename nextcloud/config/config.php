<?php
$CONFIG = array (
  'htaccess.RewriteBase' => '/nextcloud/',
  'memcache.local' => '\\OC\\Memcache\\APCu',
  'apps_paths' => 
  array (
    0 => 
    array (
      'path' => '/var/www/html/apps',
      'url' => '/apps',
      'writable' => false,
    ),
    1 => 
    array (
      'path' => '/var/www/html/custom_apps',
      'url' => '/custom_apps',
      'writable' => true,
    ),
  ),
  'instanceid' => 'ocodvfgpfxhr',
  'passwordsalt' => '1z3NbtDq5vYLoR7hTuoK3n/R7YLX1t',
  'secret' => 'sVFzjqtJCFPajU0B/JH/QHztp5sMFmwIXUJQHJfu12wKe4yX',
  'trusted_domains' => 
  array (
    0 => 'nextcloud',
  ),
  'datadirectory' => '/var/www/html/data',
  'dbtype' => 'mysql',
  'version' => '22.1.1.2',
  'overwrite.cli.url' => 'http://nextcloud',
  'dbname' => 'nextcloud',
  'dbhost' => 'db',
  'dbport' => '',
  'dbtableprefix' => 'oc_',
  'mysql.utf8mb4' => true,
  'dbuser' => 'nextcloud',
  'dbpassword' => 'pass6854',
  'installed' => true,
);
