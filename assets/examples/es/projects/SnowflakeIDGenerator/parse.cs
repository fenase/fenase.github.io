string s = "06975580616378931208";
ulong n = 6975580821430984519ul;
Snowflake fromString = Snowflake.Parse(s);
var utcDateTimeFromString = fromString.UtcDateTime; // 13/9/2022 22:26:58
var timestampFromString = fromString.Timestamp;     // 1663108018965
var machineIdFromString = fromString.MachineId;     // 477
var sequenceFromString = fromString.Sequence;       // 2056

Snowflake fromNumber = Snowflake.Parse(n);
var utcDateTimeFromNumber = fromNumber.UtcDateTime; // 13/9/2022 22:27:47
var timestampFromNumber = fromNumber.Timestamp;     // 1663108067853
var machineIdFromNumber = fromNumber.MachineId;     // 701
var sequenceFromNumber = fromNumber.Sequence;       // 3911
