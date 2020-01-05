import moment from "moment";

export function last30Days() {
  return moment()
    .add(-30, "days")
    .format("YYYY-MM-DD");
}

export default { last30Days };
