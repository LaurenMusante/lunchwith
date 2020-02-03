/*
    Creates table Lunches.
    NOTE: We only add schema here to demonstrate the ability of class QueryFile
    to pre-format SQL with static formatting parameters when needs to be.
*/

CREATE TABLE ${schema~}.lunches
(
    id serial PRIMARY KEY,
    mentorid INT,
    menteeid INT
)