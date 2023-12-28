// 몽구스 불러오기.
import mongoose from "mongoose";

// 커넥트 여기있음. 사실상 이 곳은 몽고 디비에 연결 하기 위한 공간.
const connect = () => {
  // mongoose.connect는 MongoDB 서버에 연결하는 메서드입니다.
  mongoose
    .connect(
      // 빨간색으로 표시된 부분은 대여한 ID, Password, 주소에 맞게끔 수정해주세요!
      "mongodb+srv://admin:dnwls1202@mongodbtutorial.nwbdtjv.mongodb.net/?retryWrites=true&w=majority",
      {
        dbName: "exam_1", // exam_1 데이터베이스명을 사용합니다.
      }
    )
    .then(() => console.log("MongoDB 연결에 성공하였습니다."))
    .catch((err) => console.log(`MongoDB 연결에 실패하였습니다. ${err}`));
};

mongoose.connection.on("error", (err) => {
  console.error("MongoDB 연결 에러", err);
});

export default connect;

// 볼거 없음
