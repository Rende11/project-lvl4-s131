#!/usr/bin/env node

import server from '../index.js';

const port = process.env.PORT || 3000;
server().listen(port, () => console.log(`Server ready on port ${port}`));
