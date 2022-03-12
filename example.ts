import assert from 'assert'

import { MysqlErrorCodes } from 'mysql-error-codes'

assert.equal(MysqlErrorCodes.ER_DUP_ENTRY, 1062)
