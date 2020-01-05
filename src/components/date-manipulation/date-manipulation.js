import moment from "moment";

export default function last30Days() {
  return moment()
    .add(-30, "days")
    .format("YYYY-MM-DD");
}
