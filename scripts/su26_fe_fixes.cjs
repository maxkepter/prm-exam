// su26_fe_fixes.cjs
// Contains the full 50 questions for PRM393 - SU26 - FE with fixed options, typos, correct answers, and rich Vietnamese explanations.

module.exports = [
  {
    id: "prm393___su26___fe_001",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 1,
    question: "Which Dart feature supports object-oriented programming?",
    options: {
      "A": "Pointers",
      "B": "Classes and objects",
      "C": "Macros",
      "D": "Templates"
    },
    correctAnswer: "B",
    explanation: "Dart là ngôn ngữ thuần hướng đối tượng (Pure OOP). Mọi đối tượng đều là một thể hiện (instance) của một lớp (`class`). Dart sử dụng các khái niệm cốt lõi như classes, objects, inheritance, mixins và interfaces để tổ chức mã nguồn.\n- A (Pointers) thuộc về các ngôn ngữ cấp thấp như C/C++, Dart không hỗ trợ con trỏ trực tiếp.\n- C (Macros) và D (Templates) là khái niệm của C++ / Rust, không phải tính năng OOP nền tảng trong Dart.",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_001.webp"
  },
  {
    id: "prm393___su26___fe_002",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 2,
    question: "Which method retrieves data from SharedPreferences?",
    options: {
      "A": "get()",
      "B": "read()",
      "C": "fetch()",
      "D": "load()"
    },
    correctAnswer: "A",
    explanation: "Trong plugin `shared_preferences`, phương thức tổng quát dùng để đọc giá trị từ bộ nhớ cục bộ theo khóa là `get(String key)` (hoặc các phương thức chuyên biệt theo kiểu như `getString()`, `getInt()`, `getBool()`).\n- B (`read()`), C (`fetch()`), D (`load()`) là các tên phương thức không tồn tại trong API của SharedPreferences.",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_002.webp"
  },
  {
    id: "prm393___su26___fe_003",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 3,
    question: "What is Flutter primarily used for?",
    options: {
      "A": "Writing operating systems",
      "B": "Creating native applications from a single codebase",
      "C": "Managing web hosting servers",
      "D": "Compiling low-level firmware"
    },
    correctAnswer: "B",
    explanation: "Flutter là bộ công cụ phát triển giao diện đa nền tảng mã nguồn mở của Google, được dùng chủ yếu để tạo các ứng dụng biên dịch nguyên bản (native compiled applications) cho di động (Android, iOS), web và desktop từ một cơ sở mã duy nhất (Creating native applications from a single codebase).\n- A, D sai vì Flutter không dùng để viết hệ điều hành hay firmware vi mạch nhúng.\n- C sai vì Flutter không phải công cụ quản lý máy chủ lưu trữ web.",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_003.webp"
  },
  {
    id: "prm393___su26___fe_004",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 4,
    question: "Why should state be kept as local as possible?",
    options: {
      "A": "Increase global access",
      "B": "Reduce unnecessary rebuilds",
      "C": "Speed up downloads",
      "D": "Improve animation speed"
    },
    correctAnswer: "B",
    explanation: "Giữ trạng thái ở mức cục bộ nhất có thể (Keep state as local as possible) giúp thu hẹp phạm vi ảnh hưởng của việc cập nhật dữ liệu. Khi state thay đổi, chỉ có widget con cục bộ đó vẽ lại thay vì kích hoạt rebuild lan rộng ra toàn bộ màn hình hoặc ứng dụng (Reduce unnecessary rebuilds), giúp tối ưu hiệu năng và giữ code sạch sẽ.\n- A sai vì tăng truy cập toàn cục (global access) là phản mẫu dễ gây xung đột dữ liệu.\n- C, D sai vì việc đặt state cục bộ không làm tăng tốc độ tải file từ mạng hay tốc độ hoạt họa.",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_004.webp"
  },
  {
    id: "prm393___su26___fe_005",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 5,
    question: "Which command builds a release APK?",
    options: {
      "A": "flutter run --release",
      "B": "flutter build apk",
      "C": "flutter create apk",
      "D": "flutter deploy apk"
    },
    correctAnswer: "B",
    explanation: "Lệnh dòng lệnh tiêu chuẩn của Flutter CLI để biên dịch và đóng gói ứng dụng Android thành tệp APK ở chế độ release là `flutter build apk` (mặc định là `--release`).\n- A (`flutter run --release`) dùng để chạy trực tiếp app trên thiết bị ở chế độ release, không chỉ xuất file APK đóng gói.\n- C (`flutter create`) dùng để tạo mới dự án Flutter.\n- D (`flutter deploy`) không phải lệnh hợp lệ trong Flutter CLI.",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_005.webp"
  },
  {
    id: "prm393___su26___fe_006",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 6,
    question: "What happens after successful login?",
    options: {
      "A": "App closes",
      "B": "User session starts",
      "C": "Cache is cleared",
      "D": "Theme is reset"
    },
    correctAnswer: "B",
    explanation: "Khi người dùng đăng nhập thành công, hệ thống sẽ lưu token xác thực (access token/refresh token), khởi tạo phiên làm việc mới của người dùng (User session starts) và điều hướng người dùng tới màn hình chính (Home/Dashboard).\n- A sai vì ứng dụng không đóng lại sau khi đăng nhập.\n- C sai vì cache dữ liệu người dùng không bị xóa mà thường được tải về thêm.\n- D sai vì theme ứng dụng không bị reset về mặc định khi login thành công.",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_006.webp"
  },
  {
    id: "prm393___su26___fe_007",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 7,
    question: "Which widget is an example of implicit animation?",
    options: {
      "A": "AnimatedContainer",
      "B": "AnimationController",
      "C": "Tween",
      "D": "Ticker"
    },
    correctAnswer: "A",
    explanation: "`AnimatedContainer` là widget tiêu biểu thuộc nhóm Implicit Animation (hoạt họa ngầm định) trong Flutter. Khi các thuộc tính của nó (width, height, color, border, padding) thay đổi, framework sẽ tự động nội suy và chạy animation chuyển đổi mượt mà mà lập trình viên không cần tạo AnimationController.\n- B (`AnimationController`), C (`Tween`), D (`Ticker`) là các khối thành phần cấp thấp dùng cho Explicit Animation.",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_007.webp"
  },
  {
    id: "prm393___su26___fe_008",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 8,
    question: "What is the primary responsibility of the setState() method?",
    options: {
      "A": "Dispose resources",
      "B": "Trigger widget rebuild",
      "C": "Create state object",
      "D": "Initialize variables"
    },
    correctAnswer: "B",
    explanation: "Trách nhiệm chính của `setState()` trong `StatefulWidget` là thông báo cho Flutter framework rằng dữ liệu nội bộ của widget đã thay đổi, từ đó yêu cầu framework lên lịch chạy lại phương thức `build()` để vẽ lại giao diện (Trigger widget rebuild).\n- A sai vì giải phóng tài nguyên là nhiệm vụ của `dispose()`.\n- C sai vì tạo state object là nhiệm vụ của `createState()`.\n- D sai vì khởi tạo biến ban đầu là nhiệm vụ của `initState()`.",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_008.webp"
  },
  {
    id: "prm393___su26___fe_009",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 9,
    question: "Why is clean architecture beneficial?",
    options: {
      "A": "Fewer files",
      "B": "Easier maintenance and testing",
      "C": "Better UI",
      "D": "Faster builds"
    },
    correctAnswer: "B",
    explanation: "Clean Architecture phân chia ứng dụng thành các lớp độc lập (Presentation, Domain, Data) với quy tắc phụ thuộc một chiều, giúp mã nguồn dễ hiểu, dễ viết Unit test độc lập mà không cần mock UI/Database phức tạp, và dễ bảo trì lâu dài (Easier maintenance and testing).\n- A sai vì Clean Architecture chia tách nhiều tầng và interface nên số lượng file thường nhiều hơn.\n- C sai vì kiến trúc code không quyết định tính thẩm mỹ của giao diện người dùng.\n- D sai vì thời gian biên dịch mã nguồn không phụ thuộc vào Clean Architecture.",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_009.webp"
  },
  {
    id: "prm393___su26___fe_010",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 10,
    question: "What is Dart primarily designed for in the Flutter ecosystem?",
    options: {
      "A": "Database management",
      "B": "User interface development",
      "C": "General-purpose programming with UI focus",
      "D": "Network security"
    },
    correctAnswer: "C",
    explanation: "Dart được Google phát triển như một ngôn ngữ lập trình đa năng tối ưu hóa cho phát triển giao diện người dùng (General-purpose programming with UI focus). Nó kết hợp khả năng dựng UI khai báo (declarative UI), quản lý bộ nhớ nhanh phù hợp cho việc tạo/hủy widget liên tục, cùng hỗ trợ cả JIT và AOT.\n- A, D sai vì Dart không phải ngôn ngữ chuyên biệt cho quản trị CSDL hay an ninh mạng.\n- B chưa đầy đủ bằng C vì Dart là một ngôn ngữ lập trình tổng quát (general-purpose) chứ không chỉ đơn thuần là UI builder.",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_010.webp"
  },
  {
    id: "prm393___su26___fe_011",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 11,
    question: "What does the build() method return in a widget?",
    options: {
      "A": "A single pixel coordinate",
      "B": "A widget tree describing the UI",
      "C": "A database query result",
      "D": "A network response status"
    },
    correctAnswer: "B",
    explanation: "Phương thức `build(BuildContext context)` trong Flutter trả về một cây widget (`Widget`) mô tả giao diện người dùng (A widget tree describing the UI) tương ứng với cấu hình và trạng thái hiện thời của widget đó.\n- A sai vì tính toán tọa độ pixel là công việc của RenderObject Tree bên dưới.\n- C, D sai vì phương thức build() phải là một hàm đồng bộ thuần túy (pure sync function) không được thực hiện truy vấn DB hay network request.",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_011.webp"
  },
  {
    id: "prm393___su26___fe_012",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 12,
    question: "Which Flutter test focuses on UI components?",
    options: {
      "A": "Unit test",
      "B": "Widget test",
      "C": "Load test",
      "D": "Stress test"
    },
    correctAnswer: "B",
    explanation: "`Widget test` (còn gọi là component test) trong Flutter tập trung kiểm tra một hoặc một nhóm widget giao diện người dùng (UI components) trong môi trường giả lập không cần thiết bị thật, kiểm tra xem widget có render chính xác và phản hồi các tương tác (click, scroll, nhập văn bản) như mong đợi hay không.\n- A (`Unit test`) chỉ tập trung vào các hàm/class logic thuần túy không có UI.\n- C (`Load test`) và D (`Stress test`) là kiểm thử tải và áp lực backend/server.",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_012.webp"
  },
  {
    id: "prm393___su26___fe_013",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 13,
    question: "What causes unnecessary widget rebuilds?",
    options: {
      "A": "Using const widgets",
      "B": "Overusing setState()",
      "C": "Splitting widgets",
      "D": "Using static values"
    },
    correctAnswer: "B",
    explanation: "Lạm dụng hoặc gọi `setState()` quá thường xuyên, đặc biệt là ở các widget cha cấp cao trên cây widget (Overusing setState()), là nguyên nhân phổ biến nhất gây ra hiện tượng rebuild thừa thãi cho các widget con không bị thay đổi dữ liệu, dẫn đến giật lag khung hình.\n- A (Using const widgets) và C (Splitting widgets) là các giải pháp tối ưu giúp giảm rebuild thừa.\n- D (Using static values) không trực tiếp kích hoạt rebuild.",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_013.webp"
  },
  {
    id: "prm393___su26___fe_014",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 14,
    question: "What happens if a non-nullable variable is not initialized in Dart?",
    options: {
      "A": "It defaults to null",
      "B": "It defaults to zero",
      "C": "A compile-time error occurs",
      "D": "It throws a runtime exception"
    },
    correctAnswer: "C",
    explanation: "Với cơ chế Sound Null Safety trong Dart, một biến không cho phép rỗng (non-nullable variable, ví dụ: `int x;`) bắt buộc phải được gán giá trị trước khi sử dụng. Nếu không khởi tạo hoặc gán giá trị, trình biên dịch Dart sẽ báo lỗi ngay tại thời điểm biên dịch (A compile-time error occurs).\n- A sai vì với Null Safety, biến non-nullable không thể tự nhận giá trị null.\n- B sai vì Dart không tự động gán giá trị mặc định là 0 cho số nguyên.\n- D sai vì lỗi bị chặn ngay tại compile-time chứ không chờ đến runtime.",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_014.webp"
  },
  {
    id: "prm393___su26___fe_015",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 15,
    question: "Why is separating UI and state logic recommended?",
    options: {
      "A": "Reduce app size",
      "B": "Improve maintainability",
      "C": "Faster execution",
      "D": "Better animations"
    },
    correctAnswer: "B",
    explanation: "Tách biệt rõ ràng giữa giao diện người dùng (UI) và logic quản lý trạng thái/nghiệp vụ (State logic) giúp mã nguồn trở nên dễ đọc, có cấu trúc mạch lạc, dễ mở rộng và kiểm thử (Improve maintainability), đồng thời cho phép tái sử dụng logic trên nhiều màn hình khác nhau.\n- A sai vì tách file và class không làm giảm kích thước bundle cài đặt.\n- C, D sai vì việc phân tách kiến trúc không trực tiếp làm tăng tốc độ thực thi CPU hay chất lượng animation.",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_015.webp"
  },
  {
    id: "prm393___su26___fe_016",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 16,
    question: "Why should architecture be decided early?",
    options: {
      "A": "Reduce code lines immediately",
      "B": "Reduce refactoring cost",
      "C": "Avoid testing",
      "D": "Avoid using state"
    },
    correctAnswer: "B",
    explanation: "Quyết định kiến trúc ứng dụng (như BLoC, MVVM, Clean Architecture) ngay từ giai đoạn đầu giúp định hình cấu trúc dữ liệu và phân luồng trách nhiệm nhất quán, từ đó giảm thiểu tối đa chi phí và rủi ro phải tái cấu trúc lại toàn bộ mã nguồn (Reduce refactoring cost) khi dự án mở rộng quy mô.\n- A sai vì kiến trúc tốt có thể cần thêm các file trừu tượng ban đầu.\n- C sai vì kiến trúc tốt là để hỗ trợ việc kiểm thử (testing) dễ dàng hơn chứ không phải tránh kiểm thử.\n- D sai vì không thể phát triển ứng dụng di động mà không có state.",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_016.webp"
  },
  {
    id: "prm393___su26___fe_017",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 17,
    question: "What does golden testing verify?",
    options: {
      "A": "API responses",
      "B": "UI appearance consistency",
      "C": "Database state",
      "D": "Authentication"
    },
    correctAnswer: "B",
    explanation: "Golden testing (kiểm thử hình ảnh chuẩn) trong Flutter là kỹ thuật so sánh hình ảnh render thực tế của widget với một tệp hình ảnh mẫu chuẩn (golden image) từng pixel một để đảm bảo giao diện luôn hiển thị đồng nhất về mặt hình ảnh (UI appearance consistency) và phát hiện sớm các lỗi biến dạng layout hoặc sai font/màu sắc.\n- A sai vì kiểm tra phản hồi API là nhiệm vụ của API/Network Unit Test.\n- C sai vì kiểm tra trạng thái database dùng Unit/Integration test.\n- D sai vì xác thực người dùng được kiểm tra qua Auth test.",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_017.webp"
  },
  {
    id: "prm393___su26___fe_018",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 18,
    question: "Which Flutter tool helps debug network requests?",
    options: {
      "A": "DevTools",
      "B": "Inspector",
      "C": "Emulator",
      "D": "Hot reload"
    },
    correctAnswer: "A",
    explanation: "Bộ công cụ `Flutter DevTools` (cụ thể là Network Profiler Tab) cho phép lập trình viên theo dõi, kiểm tra chi tiết các yêu cầu mạng HTTP/HTTPS, kiểm tra request headers, query parameters, response payload và đo đạc thời gian phản hồi (latency).\n- B (`Widget Inspector`) dùng để xem cây widget và cấu trúc layout.\n- C (`Emulator`) là thiết bị giả lập, không phải công cụ chuyên phân tích gói tin mạng.\n- D (`Hot reload`) dùng để cập nhật code nhanh.",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_018.webp"
  },
  {
    id: "prm393___su26___fe_019",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 19,
    question: "Which platforms can Flutter applications target using a single codebase?",
    options: {
      "A": "Android only",
      "B": "iOS only",
      "C": "Android, iOS, web, and desktop",
      "D": "Web servers only"
    },
    correctAnswer: "C",
    explanation: "Flutter hỗ trợ xuất bản ứng dụng đa nền tảng từ một cơ sở mã nguồn duy nhất bao gồm: Android, iOS, Web cùng các hệ điều hành máy tính để bàn Desktop (Windows, macOS, Linux).\n- A, B sai vì Flutter không giới hạn chỉ ở Android hay iOS.\n- D sai vì Flutter tập trung vào phát triển giao diện ứng dụng client, không phải máy chủ web backend.",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_019.webp"
  },
  {
    id: "prm393___su26___fe_020",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 20,
    question: "Which widget reacts to async data from local storage?",
    options: {
      "A": "FutureBuilder",
      "B": "StreamBuilder",
      "C": "ListView",
      "D": "Provider"
    },
    correctAnswer: "A",
    explanation: "Các thao tác đọc dữ liệu bất đồng bộ từ bộ nhớ cục bộ (như `SharedPreferences.getInstance()` hoặc câu truy vấn `sqflite`) thường trả về một `Future`. Widget `FutureBuilder` là widget chuyên dùng để lắng nghe trạng thái của Future (ConnectionState.waiting, done, error) và tự động dựng lại giao diện tương ứng khi có dữ liệu.\n- B (`StreamBuilder`) dùng để lắng nghe dòng dữ liệu liên tục (Stream) thay vì một Future đơn lẻ.\n- C (`ListView`) là widget hiển thị danh sách cuộn.\n- D (`Provider`) là giải pháp quản lý trạng thái, không phải widget tự động phân giải Future trong cây widget cơ bản.",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_020.webp"
  },
  {
    id: "prm393___su26___fe_021",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 21,
    question: "Why are widgets lightweight in Flutter?",
    options: {
      "A": "They handle OS logic",
      "B": "They are immutable descriptions",
      "C": "They contain database logic",
      "D": "They render pixels directly"
    },
    correctAnswer: "B",
    explanation: "Widgets trong Flutter là các đối tượng cực kỳ nhẹ (lightweight) vì chúng chỉ đóng vai trò là các bản mô tả bất biến (They are immutable descriptions) về cấu hình của giao diện. Việc tạo mới hoặc hủy bỏ widget diễn ra rất nhanh và tiêu tốn cực ít bộ nhớ, trong khi các đối tượng nặng hơn như RenderObject được framework tái sử dụng thông qua Element Tree.\n- A, C sai vì widget không xử lý logic hệ điều hành hay cơ sở dữ liệu.\n- D sai vì việc vẽ pixel trực tiếp do RenderObject và Flutter Engine đảm nhiệm, không phải Widget.",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_021.webp"
  },
  {
    id: "prm393___su26___fe_022",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 22,
    question: "What problem does state hoisting address?",
    options: {
      "A": "Slow animations",
      "B": "State duplication",
      "C": "Layout errors",
      "D": "Memory leaks"
    },
    correctAnswer: "B",
    explanation: "Nâng trạng thái (State Hoisting) là kỹ thuật chuyển trạng thái từ các widget con lên widget cha chung gần nhất, biến widget con thành stateless và chỉ nhận dữ liệu qua tham số constructor cùng callback. Kỹ thuật này giải quyết triệt để vấn đề trùng lặp trạng thái (State duplication) và ngăn chặn việc dữ liệu không đồng nhất giữa các widget anh em.\n- A, C, D sai vì nâng trạng thái không nhằm mục đích sửa lỗi layout, chống rò rỉ RAM hay tăng tốc độ hoạt họa.",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_022.webp"
  },
  {
    id: "prm393___su26___fe_023",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 23,
    question: "What happens when setState() is called in a StatefulWidget?",
    options: {
      "A": "The app restarts",
      "B": "The widget tree is rebuilt",
      "C": "The database is cleared",
      "D": "The network request is cancelled"
    },
    correctAnswer: "B",
    explanation: "Khi `setState()` được gọi bên trong một `StatefulWidget`, nó đánh dấu State object hiện tại là dirty và báo hiệu cho Flutter framework lên lịch chạy lại phương thức `build()`, dẫn đến việc cây con của widget đó được dựng lại (The widget tree is rebuilt) để phản ánh các thay đổi dữ liệu.\n- A sai vì ứng dụng không bị khởi động lại.\n- C, D sai vì setState() không tác động đến cơ sở dữ liệu hay hủy bỏ kết nối mạng.",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_023.webp"
  },
  {
    id: "prm393___su26___fe_024",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 24,
    question: "Which pattern is commonly used for scalable state management?",
    options: {
      "A": "Singleton only",
      "B": "BLoC",
      "C": "Inheritance only",
      "D": "Procedural logic"
    },
    correctAnswer: "B",
    explanation: "Kiến trúc `BLoC` (Business Logic Component) là một trong những mẫu quản lý trạng thái có khả năng mở rộng tốt nhất (scalable state management) trong Flutter cho các dự án lớn, nhờ phân tách rõ ràng trách nhiệm giữa UI, logic nghiệp vụ và dữ liệu thông qua cơ chế luồng Stream phản ứng (Events và States).\n- A (Singleton) dễ dẫn đến khó kiểm thử và phụ thuộc ẩn.\n- C (Inheritance only) dẫn đến cấu trúc phân cấp phức tạp và kém linh hoạt.\n- D (Procedural logic) không phù hợp cho ứng dụng hướng sự kiện hiện đại.",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_024.webp"
  },
  {
    id: "prm393___su26___fe_025",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 25,
    question: "Which input type improves user experience for emails?",
    options: {
      "A": "TextInputType.number",
      "B": "TextInputType.emailAddress",
      "C": "TextInputType.datetime",
      "D": "TextInputType.phone"
    },
    correctAnswer: "B",
    explanation: "Thiết lập thuộc tính `keyboardType: TextInputType.emailAddress` trên `TextField` sẽ yêu cầu bàn phím ảo của hệ điều hành hiển thị bàn phím được tối ưu riêng cho việc nhập địa chỉ email, tích hợp sẵn các phím tắt như ký tự `@` và tên miền `.com` giúp người dùng nhập liệu nhanh chóng và thuận tiện hơn.\n- A (`number`) chỉ hiển thị bàn phím số.\n- C (`datetime`) tối ưu cho ngày giờ.\n- D (`phone`) hiển thị bàn phím quay số điện thoại.",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_025.webp"
  },
  {
    id: "prm393___su26___fe_026",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 26,
    question: "Which widget allows both scrolling and app bars to interact?",
    options: {
      "A": "SingleChildScrollView",
      "B": "CustomScrollView",
      "C": "Column",
      "D": "Stack"
    },
    correctAnswer: "B",
    explanation: "`CustomScrollView` là widget cho phép các slivers phối hợp tương tác nhịp nhàng với nhau trong cùng một khu vực cuộn. Cụ thể, nó kết hợp hoàn hảo giữa `SliverAppBar` (thanh app bar có thể co giãn, ẩn/hiện hoặc giữ cố định) và danh sách nội dung cuộn bên dưới (`SliverList`/`SliverGrid`).\n- A (`SingleChildScrollView`) và C (`Column`) không hỗ trợ cơ chế sliver tương tác với app bar.\n- D (`Stack`) chỉ xếp chồng các widget lên nhau mà không có logic cuộn phối hợp.",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_026.webp"
  },
  {
    id: "prm393___su26___fe_027",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 27,
    question: "Which method resets all form fields?",
    options: {
      "A": "clear()",
      "B": "reset()",
      "C": "erase()",
      "D": "wipe()"
    },
    correctAnswer: "B",
    explanation: "Phương thức `reset()` của `FormState` (thông qua `_formKey.currentState!.reset()`) sẽ khôi phục toàn bộ các trường nhập liệu `FormField` bên trong biểu mẫu về giá trị ban đầu (`initialValue`) và xóa sạch các thông báo lỗi kiểm tra hợp lệ đang hiển thị.\n- A (`clear()`) là phương thức của TextEditingController để xóa trắng chữ trong 1 ô nhập, không phải phương thức của Form.\n- C (`erase()`) và D (`wipe()`) là các tên phương thức không tồn tại trong Flutter API.",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_027.webp"
  },
  {
    id: "prm393___su26___fe_028",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 28,
    question: "Why is secure authentication critical in mobile apps?",
    options: {
      "A": "Improve layout",
      "B": "Protect user data",
      "C": "Increase animation frames",
      "D": "Speed up compile time"
    },
    correctAnswer: "B",
    explanation: "Cơ chế xác thực an toàn (Secure authentication) là yêu cầu sống còn trong ứng dụng di động để bảo vệ dữ liệu cá nhân nhạy cảm của người dùng (Protect user data), ngăn chặn các cuộc tấn công đánh cắp tài khoản và đảm bảo các API riêng tư chỉ được truy cập bởi người dùng hợp lệ.\n- A, C sai vì bảo mật xác thực không tác động đến bố cục giao diện hay tốc độ khung hình hoạt họa.\n- D sai vì xác thực diễn ra tại runtime, không liên quan đến thời gian biên dịch.",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_028.webp"
  },
  {
    id: "prm393___su26___fe_029",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 29,
    question: "Which HTTP method is used to send new data to a server?",
    options: {
      "A": "GET",
      "B": "DELETE",
      "C": "POST",
      "D": "HEAD"
    },
    correctAnswer: "C",
    explanation: "Phương thức HTTP `POST` được sử dụng chuyên biệt để gửi dữ liệu mới lên máy chủ (send new data to a server) để tạo mới một tài nguyên (ví dụ: đăng ký tài khoản, gửi đơn hàng, tạo bài viết mới).\n- A (`GET`) dùng để truy xuất dữ liệu từ máy chủ.\n- B (`DELETE`) dùng để xóa tài nguyên trên máy chủ.\n- D (`HEAD`) tương tự như GET nhưng chỉ yêu cầu nhận header của phản hồi, không có nội dung body.",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_029.webp"
  },
  {
    id: "prm393___su26___fe_030",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 30,
    question: "What is the main goal of performance optimization in Flutter apps?",
    options: {
      "A": "Improve UI colors",
      "B": "Ensure smooth and responsive UI",
      "C": "Reduce code size",
      "D": "Add features"
    },
    correctAnswer: "B",
    explanation: "Mục tiêu quan trọng hàng đầu của việc tối ưu hóa hiệu năng trong ứng dụng Flutter là đảm bảo giao diện luôn mượt mà và phản hồi tức thì với tương tác người dùng (Ensure smooth and responsive UI), duy trì tốc độ hiển thị khung hình ổn định ở mức 60 FPS hoặc 120 FPS mà không gặp hiện tượng giật cục (jank).\n- A sai vì màu sắc thuộc về thiết kế mỹ thuật UI.\n- C sai vì giảm kích thước code là mục tiêu phụ trợ, không phải mục tiêu cốt lõi của tối ưu hiệu năng runtime.\n- D sai vì thêm tính năng là mục tiêu mở rộng sản phẩm.",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_030.webp"
  },
  {
    id: "prm393___su26___fe_031",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 31,
    question: "Which widget pattern protects authenticated routes?",
    options: {
      "A": "Navigator",
      "B": "Guard",
      "C": "Route protection",
      "D": "Middleware"
    },
    correctAnswer: "B",
    explanation: "Mẫu thiết kế Route Guard (`Guard`) được sử dụng phổ biến trong hệ thống điều hướng (như trong GoRouter hoặc custom Navigator) để kiểm tra quyền truy cập và trạng thái đăng nhập của người dùng trước khi cho phép họ chuyển tiếp vào các màn hình được bảo vệ (authenticated routes). Nếu chưa xác thực, Guard sẽ tự động chuyển hướng về trang đăng nhập.\n- A (`Navigator`) là widget quản lý ngăn xếp màn hình, không tự động chứa logic bảo vệ route nếu không có Guard.\n- C, D không phải là tên mẫu widget chuẩn trong Flutter framework.",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_031.webp"
  },
  {
    id: "prm393___su26___fe_032",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 32,
    question: "What does the final keyword indicate in Dart?",
    options: {
      "A": "The variable can be modified anytime",
      "B": "The variable value is fixed after assignment",
      "C": "The variable is a compile-time constant",
      "D": "The variable is global only"
    },
    correctAnswer: "B",
    explanation: "Từ khóa `final` trong Dart quy định rằng biến chỉ có thể được gán giá trị một lần duy nhất. Sau khi đã được gán giá trị, giá trị của biến sẽ cố định và không thể thay đổi được nữa (The variable value is fixed after assignment). Khác với `const`, biến `final` có thể nhận giá trị được tính toán tại thời điểm chạy (runtime).\n- A sai vì biến final là biến bất biến sau khi gán, không thể sửa đổi bất kỳ lúc nào.\n- C sai vì hằng số biên dịch compile-time là từ khóa `const`.\n- D sai vì biến final có thể là biến cục bộ, biến instance hoặc biến toàn cục.",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_032.webp"
  },
  {
    id: "prm393___su26___fe_033",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 33,
    question: "What does status code 200 indicate?",
    options: {
      "A": "Client error",
      "B": "Server error",
      "C": "Success",
      "D": "Redirect"
    },
    correctAnswer: "C",
    explanation: "Mã trạng thái phản hồi HTTP `200 OK` là mã chuẩn thuộc nhóm 2xx biểu thị rằng yêu cầu HTTP gửi lên đã được máy chủ tiếp nhận, hiểu và xử lý thành công (Success).\n- A (`Client error`) thuộc nhóm mã 4xx (ví dụ: 400 Bad Request, 404 Not Found).\n- B (`Server error`) thuộc nhóm mã 5xx (ví dụ: 500 Internal Server Error).\n- D (`Redirect`) thuộc nhóm mã 3xx (ví dụ: 301 Moved Permanently).",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_033.webp"
  },
  {
    id: "prm393___su26___fe_034",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 34,
    question: "Why is immutability important in BLoC states?",
    options: {
      "A": "It speeds up builds",
      "B": "Predictable state changes",
      "C": "It removes widgets",
      "D": "It handles routing"
    },
    correctAnswer: "B",
    explanation: "Tính bất biến (Immutability) của các đối tượng State trong kiến trúc BLoC đảm bảo rằng trạng thái không thể bị thay đổi giá trị ngầm từ bên ngoài. Mỗi khi có sự thay đổi, một State instance mới hoàn toàn phải được phát ra, giúp các chuyển đổi trạng thái trở nên minh bạch, có thể dự đoán được (Predictable state changes) và giúp `BlocBuilder` so sánh `previous != current` một cách chuẩn xác.\n- A sai vì immutability không làm tăng tốc độ biên dịch mã nguồn.\n- C, D sai vì State không có chức năng gỡ bỏ widget hay điều khiển định tuyến đường đi.",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_034.webp"
  },
  {
    id: "prm393___su26___fe_035",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 35,
    question: "What does crossAxisAlignment control?",
    options: {
      "A": "Animation curves",
      "B": "Horizontal alignment in Column",
      "C": "Route transitions",
      "D": "Text styles"
    },
    correctAnswer: "B",
    explanation: "Thuộc tính `crossAxisAlignment` xác định cách căn lề các phần tử con dọc theo trục phụ (cross axis). Trong widget `Column`, trục chính là trục dọc, do đó trục phụ là trục ngang, nghĩa là `crossAxisAlignment` điều khiển việc căn lề theo chiều ngang (Horizontal alignment in Column như start, center, end, stretch).\n- A sai vì animation curves do Curves quy định.\n- C sai vì route transitions do PageRoute/PageRouteBuilder quản lý.\n- D sai vì kiểu chữ do TextStyle quy định.",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_035.webp"
  },
  {
    id: "prm393___su26___fe_036",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 36,
    question: "What is the role of v-sync in Flutter?",
    options: {
      "A": "Compile Dart",
      "B": "Optimize animation resources",
      "C": "Format JSON",
      "D": "Handle database queries"
    },
    correctAnswer: "B",
    explanation: "`v-sync` (Vertical Synchronization, được cung cấp qua `TickerProviderStateMixin`) đồng bộ hóa quá trình phát sinh khung hình của animation với tần số quét của màn hình phần cứng. Nhờ đó, animation chỉ tính toán và render frame mới khi màn hình sẵn sàng hiển thị, giúp tiết kiệm pin, CPU/GPU và tối ưu hóa tài nguyên đồ họa (Optimize animation resources), loại bỏ hiện tượng xé hình (screen tearing).\n- A sai vì biên dịch mã Dart do Dart SDK phụ trách.\n- C, D sai vì v-sync không liên quan đến định dạng JSON hay xử lý truy vấn database.",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_036.webp"
  },
  {
    id: "prm393___su26___fe_037",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 37,
    question: "What is the main goal of testing in Flutter apps?",
    options: {
      "A": "Write more code",
      "B": "Ensure app quality and correctness",
      "C": "Speed up animation frames",
      "D": "Change app theme"
    },
    correctAnswer: "B",
    explanation: "Mục tiêu cốt lõi của việc viết kiểm thử (testing gồm Unit test, Widget test, Integration test) là đảm bảo chất lượng, tính đúng đắn và độ tin cậy của ứng dụng (Ensure app quality and correctness), phát hiện sớm các lỗi hồi quy (regressions) khi thêm tính năng mới hoặc tái cấu trúc mã nguồn.\n- A sai vì viết nhiều code hơn không phải là mục tiêu của kiểm thử.\n- C, D sai vì testing không làm tăng tốc độ khung hình hoạt họa hay thay đổi theme của ứng dụng.",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_037.webp"
  },
  {
    id: "prm393___su26___fe_038",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 38,
    question: "Why is understanding the widget lifecycle important?",
    options: {
      "A": "Improve API performance",
      "B": "Manage UI updates correctly",
      "C": "Deploy apps faster",
      "D": "Reduce file size"
    },
    correctAnswer: "B",
    explanation: "Hiểu rõ vòng đời của widget (Widget Lifecycle: `createState`, `initState`, `didChangeDependencies`, `build`, `didUpdateWidget`, `dispose`) giúp lập trình viên khởi tạo tài nguyên đúng chỗ, quản lý việc cập nhật giao diện một cách chuẩn xác (Manage UI updates correctly) và hủy các listener/controllers kịp thời để tránh rò rỉ bộ nhớ.\n- A sai vì vòng đời widget không trực tiếp làm tăng hiệu năng của server API.\n- C, D sai vì nắm vòng đời widget không giúp deploy app nhanh hơn hay giảm kích thước file cài đặt.",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_038.webp"
  },
  {
    id: "prm393___su26___fe_039",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 39,
    question: "Why are forms important in mobile applications?",
    options: {
      "A": "Add background colors",
      "B": "User data collection",
      "C": "Speed up animations",
      "D": "Replace databases"
    },
    correctAnswer: "B",
    explanation: "Biểu mẫu (Forms) là phương tiện tương tác thiết yếu trong ứng dụng di động để thu thập dữ liệu từ người dùng (User data collection) một cách có cấu trúc, ví dụ như đăng ký tài khoản, đăng nhập, tìm kiếm, nhập thông tin thanh toán và khảo sát.\n- A sai vì form không dùng để thêm màu nền.\n- C sai vì form không có chức năng tăng tốc độ hoạt họa.\n- D sai vì form là thành phần giao diện nhập liệu, không thể thay thế cơ sở dữ liệu lưu trữ.",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_039.webp"
  },
  {
    id: "prm393___su26___fe_040",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 40,
    question: "Which Flutter plugin provides SQLite support?",
    options: {
      "A": "hive",
      "B": "moor",
      "C": "sqflite",
      "D": "shared_preferences"
    },
    correctAnswer: "C",
    explanation: "`sqflite` là plugin chính thống và phổ biến nhất trong hệ sinh thái Flutter cung cấp hỗ trợ tương tác với cơ sở dữ liệu quan hệ SQLite trên cả Android, iOS và macOS.\n- A (`hive`) là cơ sở dữ liệu NoSQL dạng key-value nhẹ viết bằng Dart.\n- B (`moor` - nay đổi tên thành Drift) là thư viện reactive persistence cấp cao bọc bên ngoài SQLite.\n- D (`shared_preferences`) dùng để lưu trữ key-value các giá trị nguyên thủy đơn giản.",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_040.webp"
  },
  {
    id: "prm393___su26___fe_041",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 41,
    question: "When is it most appropriate to customize themes in a Flutter app?",
    options: {
      "A": "After API integration",
      "B": "During UI/UX design phase",
      "C": "Only at deployment",
      "D": "Only for testing"
    },
    correctAnswer: "B",
    explanation: "Thời điểm thích hợp nhất để thiết lập và tùy chỉnh hệ thống Theme (`ThemeData`, bảng màu, typography) là trong giai đoạn thiết kế giao diện và trải nghiệm người dùng (During UI/UX design phase). Việc định nghĩa theme sớm giúp toàn bộ các màn hình và widget xây dựng sau này thừa hưởng nhất quán phong cách thiết kế của thương hiệu mà không cần sửa đổi lại nhiều lần.\n- A sai vì theme là cấu hình thị giác, không phụ thuộc vào việc tích hợp API backend.\n- C, D sai vì chỉ tùy chỉnh theme khi deploy hoặc khi test sẽ gây tốn kém thời gian tái cấu trúc lớn.",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_041.webp"
  },
  {
    id: "prm393___su26___fe_042",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 42,
    question: "Which HTTP header is commonly used for authorization?",
    options: {
      "A": "Content-Type",
      "B": "Accept",
      "C": "Authorization",
      "D": "Cache-Control"
    },
    correctAnswer: "C",
    explanation: "Header chuẩn của giao thức HTTP dùng để truyền tải thông tin chứng thực (thường là Bearer Token, JWT hoặc Basic Credentials) lên máy chủ nhằm xác minh danh tính người dùng là `Authorization: Bearer <token>`.\n- A (`Content-Type`) thông báo định dạng dữ liệu trong body (ví dụ: `application/json`).\n- B (`Accept`) chỉ định định dạng phản hồi mà client mong muốn nhận về.\n- D (`Cache-Control`) quản lý chính sách lưu bộ nhớ đệm (caching).",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_042.webp"
  },
  {
    id: "prm393___su26___fe_043",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 43,
    question: "Why is passing context important in navigation?",
    options: {
      "A": "Save memory",
      "B": "Access Navigator",
      "C": "Speed up network requests",
      "D": "Improve animation fps"
    },
    correctAnswer: "B",
    explanation: "Trong Flutter, việc truyền `BuildContext` là bắt buộc để truy cập vào Navigator (Access Navigator) thông qua phương thức `Navigator.of(context)`. Context cung cấp thông tin vị trí của widget trong cây để tìm kiếm NavigatorState của widget cha cấp cao nhất có thẩm quyền điều hướng.\n- A, C, D sai vì passing context không nhằm mục đích tiết kiệm RAM, tăng tốc độ mạng hay tăng FPS của animation.",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_043.webp"
  },
  {
    id: "prm393___su26___fe_044",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 44,
    question: "What is the main benefit of Flutter's widget-based architecture?",
    options: {
      "A": "Widgets replace operating systems",
      "B": "Widgets allow code reuse across platforms",
      "C": "Widgets automatically optimize databases",
      "D": "Widgets eliminate the need for testing"
    },
    correctAnswer: "B",
    explanation: "Lợi ích nổi bật nhất của kiến trúc dựa trên widget của Flutter là tính mô đun hóa và khả năng tái sử dụng mã nguồn cao trên mọi nền tảng (Widgets allow code reuse across platforms). Các widget được ghép nối linh hoạt như những khối lego và hoạt động đồng nhất trên Android, iOS, Web và Desktop.\n- A sai vì widget là thành phần UI, không thay thế hệ điều hành.\n- C sai vì widget không quản lý hay tối ưu hóa database.\n- D sai vì kiến trúc widget không loại bỏ nhu cầu kiểm thử.",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_044.webp"
  },
  {
    id: "prm393___su26___fe_045",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 45,
    question: "Which Dart data structure is best suited for storing an ordered collection of items?",
    options: {
      "A": "Set",
      "B": "Map",
      "C": "List",
      "D": "Queue"
    },
    correctAnswer: "C",
    explanation: "Trong ngôn ngữ Dart, `List` là cấu trúc dữ liệu mảng có thứ tự (ordered collection of items) phổ biến và phù hợp nhất, cho phép truy xuất và thao tác các phần tử theo chỉ số vị trí (index dựa trên 0).\n- A (`Set`) là tập hợp các phần tử không trùng lặp và không đảm bảo thứ tự index như List.\n- B (`Map`) là tập hợp các cặp key-value liên kết theo khóa.\n- D (`Queue`) là hàng đợi chuyên dùng cho thao tác FIFO (First-In, First-Out), ít phổ biến hơn List cho lưu trữ tổng quát.",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_045.webp"
  },
  {
    id: "prm393___su26___fe_046",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 46,
    question: "Which Flutter widget reacts to authentication state changes?",
    options: {
      "A": "ListView",
      "B": "StreamBuilder",
      "C": "Column",
      "D": "Expanded"
    },
    correctAnswer: "B",
    explanation: "Trạng thái xác thực của người dùng (ví dụ từ Firebase `FirebaseAuth.instance.authStateChanges()`) thường được phát ra dưới dạng một `Stream`. Widget `StreamBuilder` tự động lắng nghe các sự kiện đăng nhập/đăng xuất mới từ Stream này và vẽ lại giao diện tương ứng theo thời gian thực.\n- A (`ListView`), C (`Column`), D (`Expanded`) là các widget bố cục tĩnh, không có khả năng tự động phản ứng với dòng dữ liệu bất đồng bộ.",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_046.webp"
  },
  {
    id: "prm393___su26___fe_047",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 47,
    question: "Which widget rebuilds automatically during animation?",
    options: {
      "A": "AnimatedBuilder",
      "B": "FutureBuilder",
      "C": "StreamBuilder",
      "D": "LayoutBuilder"
    },
    correctAnswer: "A",
    explanation: "`AnimatedBuilder` là widget chuyên dùng để lắng nghe một đối tượng `Listenable` (chẳng hạn như `Animation` hoặc `AnimationController`). Mỗi khi giá trị hoạt họa thay đổi ở từng khung hình (frame tick), `AnimatedBuilder` sẽ tự động gọi lại hàm builder để vẽ lại giao diện chuyển động mà không cần gọi `setState()` thủ công ở widget cha.\n- B (`FutureBuilder`) chỉ dựng lại khi Future hoàn thành.\n- C (`StreamBuilder`) chỉ dựng lại khi Stream phát ra giá trị mới.\n- D (`LayoutBuilder`) chỉ dựng lại khi ràng buộc kích thước (BoxConstraints) từ widget cha thay đổi.",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_047.webp"
  },
  {
    id: "prm393___su26___fe_048",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 48,
    question: "What is the main purpose of the Container widget?",
    options: {
      "A": "Handle network requests",
      "B": "Layout, styling, and positioning",
      "C": "Database storage",
      "D": "User authentication"
    },
    correctAnswer: "B",
    explanation: "`Container` là widget đa năng tiện ích trong Flutter kết hợp nhiều widget bố cục và trang trí cơ bản lại với nhau (Layout, styling, and positioning), cho phép lập trình viên tùy biến kích thước (width/height), lề đệm (padding), lề ngoài (margin), màu sắc, đường viền, góc bo tròn (BoxDecoration) và căn chỉnh vị trí (alignment) của một widget con.\n- A, C, D sai vì Container là widget giao diện thuần túy, không xử lý gọi mạng, lưu trữ CSDL hay xác thực tài khoản.",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_048.webp"
  },
  {
    id: "prm393___su26___fe_049",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 49,
    question: "Which step is required before running a Flutter app for the first time?",
    options: {
      "A": "Installing Docker",
      "B": "Setting up the Flutter SDK",
      "C": "Setting up a cloud server",
      "D": "Buying an Apple Developer account"
    },
    correctAnswer: "B",
    explanation: "Trước khi có thể khởi chạy ứng dụng Flutter lần đầu tiên, lập trình viên bắt buộc phải tải về và cấu hình bộ công cụ Flutter SDK (Setting up the Flutter SDK), thêm đường dẫn vào biến môi trường PATH và kiểm tra sự đầy đủ của môi trường bằng lệnh `flutter doctor`.\n- A, C sai vì Docker và cloud server chỉ cần thiết nếu dự án có backend phức tạp, không bắt buộc để chạy app Flutter cơ bản.\n- D sai vì tài khoản Apple Developer chỉ bắt buộc khi cần phát hành lên App Store hoặc chạy thử nghiệm nâng cao trên iOS.",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_049.webp"
  },
  {
    id: "prm393___su26___fe_050",
    exam: "PRM393 - SU26 - FE",
    questionNumber: 50,
    question: "Which practice improves API security?",
    options: {
      "A": "Using HTTP only",
      "B": "Using HTTPS",
      "C": "Hardcoding API secrets in code",
      "D": "Disabling authentication"
    },
    correctAnswer: "B",
    explanation: "Sử dụng giao thức `HTTPS` (HTTP qua SSL/TLS) là tiêu chuẩn bắt buộc giúp mã hóa toàn bộ dữ liệu trao đổi giữa ứng dụng di động và máy chủ API, ngăn chặn các cuộc tấn công nghe lén dữ liệu (eavesdropping) và tấn công trung gian (Man-in-the-Middle - MITM).\n- A (`Using HTTP only`) truyền dữ liệu văn bản thô không mã hóa, rất dễ bị bắt trộm gói tin.\n- C (`Hardcoding API secrets in code`) khiến kẻ xấu dễ dàng dịch ngược (decompile) APK để lấy cắp khóa bí mật.\n- D (`Disabling authentication`) làm cho API hoàn toàn không được bảo vệ.",
    image: "PRM393 - SU26 - FE/PRM393 SU26 FE_050.webp"
  }
];
