/*
    Adds a new lunch for a specified user.
    NOTE: We only add schema here to demonstrate the ability of class QueryFile
    to pre-format SQL with static formatting parameters when needs to be.
*/
INSERT INTO ${schema~}.lunches(mentorid, menteeid)
VALUES (${mentorid}, ${menteeid})
RETURNING *
