// // ------ main.js
// const getData = () => {
//   console.log("Get Data Log");
//   let config = {
//     method: "get",
//     url: "https://gsmtasks.com/api/tasks/tasks/",
//     authorization: "9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b",
//   };
//   try {
//     const response = config;
//     console.log(response);
//   } catch (error) {
//     console.log("error", error);
//   }
//   // fetch(
//   //   "https://gsmtasks.com/api/tasks/tasks/?account=token9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b"
//   // ).then((response) => {
//   //   console.log("response", response);
//   //   setTask(response);
//   //   console.log(task);
//   // });
// };

// //--------- taskform.js

// async function postData(e) {
//   e.preventDefault();
//   let config = {
//     method: "post",
//     url: "https://gsmtasks.com/api/tasks/tasks/",
//     body: JSON.stringify({
//       acount:
//         "https://gsmtasks.com/api/tasks/accounts/fdd73ab50cf234b45815b34a6339b7ca967601f5/",
//       category: "assignment",
//       address: {
//         raw_address: taskState,
//       },
//     }),
//     headers: {
//       authorization: "Token fdd73ab50cf234b45815b34a6339b7ca967601f5",
//     },
//   };
//   try {
//     const response = config;
//     console.log(response);
//   } catch (error) {
//     console.log("error", error);
//   }
// }

// // ------ GMap.js
// const [tasks, setTask] = useState(props.task);
