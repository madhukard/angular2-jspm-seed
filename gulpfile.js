var requireDir = require('require-dir');

// Require all tasks in tools/gulp/tasks, including sub folders
requireDir('./tools/gulp/tasks', { recurse: true });
