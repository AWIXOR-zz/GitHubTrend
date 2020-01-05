import moment from "moment";

export function last30Days() {
  return moment()
    .add(-30, "days")
    .format("YYYY-MM-DD");
}

export function numberOfDays(repoDate) {
  let todayDate = new Date();
  let repoDateConv = new Date(repoDate);
  let result = todayDate.getTime() - repoDateConv.getTime();
  return Math.ceil(result / (1000 * 3600 * 24));
}
export default { last30Days, numberOfDays };
