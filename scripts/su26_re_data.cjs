module.exports = [
  {
    id: "prm393___su26___fe___re_001",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 1,
    question: "What does a Dart class primarily represent?",
    options: {
      "A": "A UI widget only",
      "B": "A blueprint for creating objects",
      "C": "A database table",
      "D": "A network request"
    },
    correctAnswer: "B",
    explanation: "Trong lập trình hướng đối tượng (OOP) với Dart, một class đóng vai trò là bản thiết kế hay khuôn mẫu (blueprint) định nghĩa các thuộc tính (fields/properties) và hành vi (methods) để tạo ra các đối tượng (objects).\n- A sai vì class trong Dart dùng cho nhiều mục đích (model, service, controller), widget chỉ là trường hợp đặc biệt kế thừa từ Widget.\n- C sai vì class không phải là bảng cơ sở dữ liệu.\n- D sai vì network request là một hành động/tác vụ, không phải vai trò cơ bản của class.",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_001.webp"
  },
  {
    id: "prm393___su26___fe___re_002",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 2,
    question: "What type of data is SharedPreferences best suited for?",
    options: {
      "A": "Large datasets",
      "B": "Simple primitive values",
      "C": "Images",
      "D": "Complex objects"
    },
    correctAnswer: "B",
    explanation: "SharedPreferences trong Flutter được tối ưu hóa để lưu trữ các cặp key-value với dữ liệu nguyên thủy đơn giản (primitive values như int, double, bool, String, List<String>), thích hợp cho cấu hình người dùng, cài đặt ứng dụng hoặc cờ trạng thái (flags).\n- A, C, D sai vì SharedPreferences không được thiết kế cho dữ liệu lớn (large datasets), tệp hình ảnh (images) hay đối tượng phức tạp; những dữ liệu đó nên lưu trong SQLite (sqflite), Hive hoặc file cục bộ.",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_002.webp"
  },
  {
    id: "prm393___su26___fe___re_003",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 3,
    question: "What is the main purpose of app architecture?",
    options: {
      "A": "UI design",
      "B": "Organize code structure",
      "C": "Improve animations",
      "D": "Handle API"
    },
    correctAnswer: "B",
    explanation: "Mục đích quan trọng nhất của kiến trúc ứng dụng (App Architecture như MVC, MVVM, Clean Architecture, BLoC) là tổ chức cấu trúc mã nguồn (Organize code structure) rõ ràng, phân tách trách nhiệm (Separation of Concerns), giúp dự án dễ bảo trì, dễ mở rộng và thuận tiện viết kiểm thử tự động.\n- A sai vì UI design là việc thiết kế đồ họa giao diện.\n- C sai vì kiến trúc không trực tiếp tạo ra animation mượt mà.\n- D sai vì xử lý API chỉ là chức năng cụ thể của tầng Data/Network, không phải mục đích toàn diện của kiến trúc.",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_003.webp"
  },
  {
    id: "prm393___su26___fe___re_004",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 4,
    question: "Which component is required to run and test Flutter applications on a local machine?",
    options: {
      "A": "A cloud hosting service",
      "B": "A physical server",
      "C": "An emulator or physical device"
    , "D": "A database management system"
    },
    correctAnswer: "C",
    explanation: "Để chạy, xem trước và kiểm thử ứng dụng Flutter trực tiếp trên máy tính cá nhân, bạn cần có một máy ảo (Android Emulator / iOS Simulator) hoặc một thiết bị di động thật (physical device) kết nối qua cáp USB/WiFi.\n- A, B sai vì dịch vụ đám mây (cloud hosting) hay máy chủ vật lý (physical server) dùng cho backend/deployment, không bắt buộc để chạy app Flutter cục bộ.\n- D sai vì DBMS không phải thành phần bắt buộc để khởi chạy một ứng dụng di động.",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_004.webp"
  },
  {
    id: "prm393___su26___fe___re_005",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 5,
    question: "What does REST stand for?",
    options: {
      "A": "Remote State Transfer",
      "B": "Representational State Transfer",
      "C": "Reactive Service Transport",
      "D": "Request State Transfer"
    },
    correctAnswer: "B",
    explanation: "REST là viết tắt của Representational State Transfer, một phong cách kiến trúc phần mềm định nghĩa các nguyên tắc thiết kế cho các dịch vụ web phân tán, thường sử dụng giao thức HTTP với các phương thức chuẩn (GET, POST, PUT, DELETE).\n- Các phương án A, C, D đều là những cụm từ sai chính tả hoặc giả định.",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_005.webp"
  },
  {
    id: "prm393___su26___fe___re_006",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 6,
    question: "What is pagination used for?",
    options: {
      "A": "UI animation",
      "B": "Handling large datasets efficiently",
      "C": "Theme management",
      "D": "Authentication"
    },
    correctAnswer: "B",
    explanation: "Phân trang (Pagination) là kỹ thuật chia nhỏ một tập dữ liệu lớn thành các trang nhỏ để tải từng phần theo yêu cầu (Handling large datasets efficiently). Điều này giúp tiết kiệm băng thông mạng, giảm tải cho server và tránh tràn bộ nhớ RAM thiết bị khi cuộn danh sách.\n- A sai vì phân trang không phải là hiệu ứng chuyển động giao diện.\n- C, D sai vì phân trang không phục vụ việc quản lý theme hay xác thực người dùng.",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_006.webp"
  },
  {
    id: "prm393___su26___fe___re_007",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 7,
    question: "What does Navigator.pop() do?",
    options: {
      "A": "Open a new screen",
      "B": "Close current screen",
      "C": "Restart app",
      "D": "Clear stack"
    },
    correctAnswer: "B",
    explanation: "Hệ thống điều hướng trong Flutter quản lý các màn hình (routes) dưới dạng ngăn xếp (stack). Lệnh `Navigator.pop(context)` sẽ lấy màn hình hiện tại ra khỏi đỉnh ngăn xếp và đóng nó (Close current screen), quay trở về màn hình trước đó.\n- A sai vì mở màn hình mới sử dụng `Navigator.push()`.\n- C sai vì không thể restart app bằng `pop()`.\n- D sai vì xóa toàn bộ stack phải dùng `pushAndRemoveUntil()` hoặc `popUntil()`.",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_007.webp"
  },
  {
    id: "prm393___su26___fe___re_008",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 8,
    question: "What is rebuild scope optimization in Flutter?",
    options: {
      "A": "Reducing widget tree depth",
      "B": "Limiting rebuild to affected widgets",
      "C": "Caching API responses",
      "D": "Using global state"
    },
    correctAnswer: "B",
    explanation: "Tối ưu hóa phạm vi rebuild (Rebuild scope optimization) là nguyên lý thiết kế nhằm giới hạn việc dựng lại giao diện chỉ tại đúng các widget thực sự có trạng thái thay đổi (Limiting rebuild to affected widgets), ngăn chặn việc rebuild lan rộng ra toàn bộ cây widget cha không cần thiết, giúp duy trì 60/120 FPS mượt mà.\n- A sai vì giảm độ sâu cây widget không tương đương với tối ưu phạm vi rebuild.\n- C sai vì cache API thuộc tầng mạng/dữ liệu.\n- D sai vì dùng global state không đúng cách thậm chí còn làm lan rộng rebuild ngoài ý muốn.",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_008.webp"
  },
  {
    id: "prm393___su26___fe___re_009",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 9,
    question: "Which pattern separates storage logic from UI?",
    options: {
      "A": "MVC",
      "B": "Repository pattern",
      "C": "Singleton",
      "D": "Factory"
    },
    correctAnswer: "B",
    explanation: "Repository pattern đóng vai trò là tầng trung gian (abstraction layer) đứng giữa nguồn dữ liệu (local storage/API) và logic giao diện người dùng. Nó cung cấp API truy xuất dữ liệu sạch cho UI/Bloc/ViewModel mà không để UI biết dữ liệu thực tế được lưu hay lấy từ đâu.\n- A (MVC) là kiến trúc tổng thể, không tập trung chuyên biệt vào việc cô lập logic lưu trữ dữ liệu như Repository.\n- C (Singleton) chỉ đảm bảo tạo ra một instance duy nhất.\n- D (Factory) là design pattern phục vụ tạo lập đối tượng.",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_009.webp"
  },
  {
    id: "prm393___su26___fe___re_010",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 10,
    question: "What is the purpose of building a release version of a Flutter app?",
    options: {
      "A": "Debug code",
      "B": "Prepare app for distribution",
      "C": "Test UI",
      "D": "Change theme"
    },
    correctAnswer: "B",
    explanation: "Mục đích của việc build bản phát hành (Release mode) là để chuẩn bị ứng dụng sẵn sàng phân phối đến người dùng cuối trên kho ứng dụng (Prepare app for distribution). Ở chế độ này, code được tối ưu hóa tối đa qua AOT compilation, gỡ bỏ toàn bộ debug symbols, assertions và devtools hooks giúp app chạy nhanh và nhẹ nhất.\n- A, C sai vì việc debug và test UI diễn ra trong Debug hoặc Profile mode.\n- D sai vì theme là cấu hình giao diện trong code, không liên quan đến chế độ build release.",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_010.webp"
  },
  {
    id: "prm393___su26___fe___re_011",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 11,
    question: "Why should navigation logic be well-structured?",
    options: {
      "A": "Reduce UI size",
      "B": "Improve maintainability",
      "C": "Increase speed",
      "D": "Avoid widgets"
    },
    correctAnswer: "B",
    explanation: "Cấu trúc điều hướng (navigation) rõ ràng, có tổ chức (như dùng named routes, GoRouter hoặc Router API) giúp mã nguồn ứng dụng phân tách mạch lạc, dễ mở rộng, dễ gỡ lỗi và kiểm thử (Improve maintainability) khi dự án phát triển nhiều màn hình.\n- A sai vì điều hướng không làm giảm kích thước đồ họa của UI.\n- C sai vì tốc độ chuyển trang phụ thuộc vào việc render và dispose widget, không phải do cách tổ chức route.\n- D sai vì Flutter luôn xây dựng trên cây widget, không thể tránh widget.",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_011.webp"
  },
  {
    id: "prm393___su26___fe___re_012",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 12,
    question: "Why is logout functionality important?",
    options: {
      "A": "Free memory",
      "B": "End user session securely",
      "C": "Improve UI",
      "D": "Change theme"
    },
    correctAnswer: "B",
    explanation: "Chức năng đăng xuất (Logout) có vai trò bảo mật cốt lõi nhằm kết thúc phiên làm việc của người dùng một cách an toàn (End user session securely): hủy bỏ access/refresh tokens, xóa thông tin nhạy cảm khỏi bộ nhớ đệm và ngăn chặn nguy cơ bị chiếm quyền truy cập khi người khác dùng chung thiết bị.\n- A sai vì giải phóng một lượng nhỏ RAM của phiên đăng nhập không phải mục đích quan trọng nhất.\n- C, D sai vì logout không nhằm mục đích cải thiện giao diện hay thay đổi theme.",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_012.webp"
  },
  {
    id: "prm393___su26___fe___re_013",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 13,
    question: "Which widget animates between two widgets?",
    options: {
      "A": "AnimatedSwitcher",
      "B": "AnimatedOpacity",
      "C": "AnimatedAlign",
      "D": "AnimatedSize"
    },
    correctAnswer: "A",
    explanation: "`AnimatedSwitcher` là widget chuyên biệt trong Flutter dùng để thực hiện hiệu ứng chuyển tiếp (transition) mượt mà giữa hai widget con (hoặc khi widget con đổi key/nội dung), mặc định sử dụng hiệu ứng FadeTransition.\n- B (`AnimatedOpacity`) chỉ làm thay đổi độ mờ đục của một widget con duy nhất.\n- C (`AnimatedAlign`) chỉ tạo hoạt họa thay đổi vị trí căn lề (alignment) của một widget con.\n- D (`AnimatedSize`) chỉ tạo hoạt họa khi kích thước (size) của widget con thay đổi.",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_013.webp"
  },
  {
    id: "prm393___su26___fe___re_014",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 14,
    question: "Which method is used to update the UI when state changes?",
    options: {
      "A": "build()",
      "B": "setState()",
      "C": "initState()",
      "D": "dispose()"
    },
    correctAnswer: "B",
    explanation: "Trong một `StatefulWidget`, lập trình viên gọi `setState(() { ... })` để thông báo cho Flutter framework rằng trạng thái nội tại của đối tượng State đã được cập nhật, từ đó framework sẽ lên lịch gọi lại phương thức `build()` để vẽ lại giao diện mới.\n- A (`build()`) là phương thức do framework tự động gọi, không bao giờ được lập trình viên gọi trực tiếp.\n- C (`initState()`) chỉ chạy một lần duy nhất khi State object được khởi tạo.\n- D (`dispose()`) được gọi khi State object bị hủy vĩnh viễn khỏi cây widget để giải phóng tài nguyên.",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_014.webp"
  },
  {
    id: "prm393___su26___fe___re_015",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 15,
    question: "Which programming language is used to develop Flutter applications?",
    options: {
      "A": "Kotlin",
      "B": "Swift",
      "C": "Dart",
      "D": "JavaScript"
    },
    correctAnswer: "C",
    explanation: "Flutter sử dụng ngôn ngữ lập trình `Dart` (do Google phát triển) làm ngôn ngữ chính thống. Dart cung cấp tính năng hướng đối tượng mạnh mẽ, hỗ trợ sound null safety, cũng như cơ chế biên dịch kép JIT (cho Hot Reload) và AOT (cho bản Release native siêu nhanh).\n- A (Kotlin) là ngôn ngữ phát triển native cho nền tảng Android.\n- B (Swift) là ngôn ngữ phát triển native cho iOS/macOS.\n- D (JavaScript) là ngôn ngữ dùng trong React Native.",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_015.webp"
  },
  {
    id: "prm393___su26___fe___re_016",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 16,
    question: "Why is the widget tree considered immutable?",
    options: {
      "A": "Widgets cannot be removed",
      "B": "Widgets are recreated instead of modified",
      "C": "Widgets are stored permanently",
      "D": "Widgets cannot contain data"
    },
    correctAnswer: "B",
    explanation: "Cây widget trong Flutter mang tính chất bất biến (immutable) vì một khi đã khởi tạo, các thuộc tính của widget không thể bị sửa đổi trực tiếp. Khi trạng thái thay đổi, Flutter sẽ tạo ra các thể hiện widget mới để thay thế cái cũ (Widgets are recreated instead of modified). Quá trình này rất nhanh và nhẹ vì Flutter tái sử dụng Element Tree và RenderObject Tree bên dưới.\n- A sai vì widget có thể bị gỡ bỏ khỏi cây bất cứ lúc nào.\n- C sai vì widget chỉ tồn tại tạm thời và bị garbage collection thu hồi.\n- D sai vì widget chứa đầy đủ các trường dữ liệu cấu hình giao diện.",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_016.webp"
  },
  {
    id: "prm393___su26___fe___re_017",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 17,
    question: "Why are const widgets recommended?",
    options: {
      "A": "They improve readability",
      "B": "They reduce rebuild cost",
      "C": "They add state",
      "D": "They handle navigation"
    },
    correctAnswer: "B",
    explanation: "Sử dụng từ khóa `const` với constructor của widget cho phép Flutter khởi tạo instance đó duy nhất một lần tại thời điểm biên dịch và lưu vào bộ nhớ dùng chung. Trong các lần rebuild tiếp theo của widget cha, Flutter sẽ bỏ qua việc xây dựng lại widget const này, giúp giảm đáng kể chi phí rebuild (They reduce rebuild cost) và tối ưu FPS.\n- A sai vì cải thiện khả năng đọc mã chỉ là yếu tố phụ, mục đích cốt lõi là tối ưu hiệu năng.\n- C sai vì const widget là bất biến hoàn toàn, không thể có state biến đổi.\n- D sai vì const widget không liên quan đến xử lý điều hướng.",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_017.webp"
  },
  {
    id: "prm393___su26___fe___re_018",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 18,
    question: "Which feature of Dart helps prevent null reference errors at compile time?",
    options: {
      "A": "Dynamic typing",
      "B": "Hot reload",
      "C": "Null safety",
      "D": "Asynchronous execution"
    },
    correctAnswer: "C",
    explanation: "Tính năng Sound Null Safety (an toàn rỗng) của Dart phân biệt chặt chẽ giữa các kiểu dữ liệu không thể null (non-nullable) và có thể null (nullable: `Type?`). Trình biên dịch sẽ báo lỗi ngay tại thời điểm compile-time nếu bạn truy cập thuộc tính trên một biến có nguy cơ bị null mà không kiểm tra trước, loại bỏ hoàn toàn lỗi crash runtime kinh điển NullPointer/NullReference.\n- A (Dynamic typing) bỏ qua kiểm tra kiểu tĩnh, làm tăng nguy cơ lỗi runtime.\n- B (Hot reload) là cơ chế nạp lại code trong quá trình debug.\n- D (Asynchronous execution) là cơ chế xử lý bất đồng bộ với Future/Stream.",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_018.webp"
  },
  {
    id: "prm393___su26___fe___re_019",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 19,
    question: "When should you prefer Provider over setState()?",
    options: {
      "A": "For simple UI updates",
      "B": "For global or shared state",
      "C": "For animations",
      "D": "For navigation"
    },
    correctAnswer: "B",
    explanation: "`Provider` là giải pháp quản lý trạng thái và Dependency Injection lý tưởng khi bạn cần quản lý trạng thái toàn cục hoặc chia sẻ trạng thái giữa nhiều widget/màn hình phân cấp trong cây widget (For global or shared state), tránh hiện tượng truyền tham số thủ công qua nhiều tầng (prop drilling).\n- A sai vì với các cập nhật UI đơn giản, cục bộ trong nội bộ một widget thì `setState()` là giải pháp đơn giản và nhanh gọn nhất.\n- C sai vì animation dùng AnimationController và AnimatedBuilder.\n- D sai vì điều hướng thuộc trách nhiệm của Navigator/Router.",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_019.webp"
  },
  {
    id: "prm393___su26___fe___re_020",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 20,
    question: "What advantage does a single codebase provide in Flutter development?",
    options: {
      "A": "Higher memory usage",
      "B": "Simpler UI customization",
      "C": "Reduced development and maintenance effort",
      "D": "Automatic database synchronization"
    },
    correctAnswer: "C",
    explanation: "Ưu điểm vượt trội nhất của việc phát triển với cơ sở mã nguồn duy nhất (Single Codebase) trong Flutter là giảm thiểu công sức phát triển, kiểm thử và bảo trì (Reduced development and maintenance effort). Thay vì duy trì hai đội ngũ phát triển riêng biệt cho iOS và Android, một nhóm lập trình viên Flutter có thể xuất bản ứng dụng đồng nhất cho cả hai nền tảng (cùng với Web và Desktop).\n- A là nhược điểm tiêu cực (nếu có), không phải ưu điểm.\n- B sai vì việc tùy chỉnh UI giữa các nền tảng vẫn cần xử lý giao diện có chủ đích chứ không tự động đơn giản hơn.\n- D sai vì cơ sở mã chung không cung cấp tính năng tự động đồng bộ hóa cơ sở dữ liệu.",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_020.webp"
  },
  {
    id: "prm393___su26___fe___re_021",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 21,
    question: "Which widget is commonly used as the root of a Flutter app?",
    options: {
      "A": "Scaffold",
      "B": "MaterialApp",
      "C": "Container",
      "D": "Column"
    },
    correctAnswer: "B",
    explanation: "`MaterialApp` là widget nền tảng tiêu chuẩn được đặt ở gốc (root) của hầu hết các ứng dụng Flutter. Nó khởi tạo Navigator, áp dụng hệ thống thiết kế Material Design, cung cấp ThemeData, điều khiển hướng dẫn lộ trình và quản lý localization.\n- A (`Scaffold`) cung cấp cấu trúc layout cơ bản cho một trang/màn hình đơn lẻ (AppBar, Body, FloatingActionButton), thường là con của MaterialApp.\n- C (`Container`) và D (`Column`) là các widget bố cục cơ bản bên trong từng màn hình.",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_021.webp"
  },
  {
    id: "prm393___su26___fe___re_022",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 22,
    question: "Why should setState() be called sparingly?",
    options: {
      "A": "It increases app size",
      "B": "It may trigger unnecessary rebuilds",
      "C": "It blocks UI thread",
      "D": "It causes memory leaks"
    },
    correctAnswer: "B",
    explanation: "Mỗi khi `setState()` được gọi, Flutter sẽ đánh dấu State object là dirty và kích hoạt phương thức `build()` để dựng lại toàn bộ cây widget con thuộc phạm vi của nó. Nếu gọi quá thường xuyên hoặc gọi ở widget cấp cao trong cây, nó sẽ gây ra các lần vẽ lại không cần thiết (trigger unnecessary rebuilds), làm hao phí CPU/GPU và gây giật khung hình.\n- A sai vì setState() là phương thức runtime, không ảnh hưởng đến dung lượng file cài đặt ứng dụng.\n- C sai vì setState() lên lịch rebuild bất đồng bộ cho frame tiếp theo chứ không trực tiếp block main thread.\n- D sai vì setState() tự bản thân nó không gây rò rỉ bộ nhớ.",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_022.webp"
  },
  {
    id: "prm393___su26___fe___re_023",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 23,
    question: "What triggers a rebuild of a widget?",
    options: {
      "A": "Navigation only",
      "B": "Calling setState()",
      "C": "Restarting the IDE",
      "D": "Changing the SDK"
    },
    correctAnswer: "B",
    explanation: "Trong một `StatefulWidget`, việc gọi `setState()` là cách chính thống và trực tiếp để thông báo cho Flutter rằng dữ liệu nội tại đã thay đổi và kích hoạt tiến trình dựng lại (rebuild) widget đó. Ngoài ra, widget cũng được rebuild khi nhận tham số mới từ cha hoặc khi InheritedWidget phụ thuộc phát ra thay đổi.\n- A sai vì điều hướng chỉ là một trường hợp chuyển route, không phải cơ chế duy nhất kích hoạt rebuild.\n- C, D là các thao tác môi trường bên ngoài IDE/SDK, không phải cơ chế runtime trong ứng dụng.",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_023.webp"
  },
  {
    id: "prm393___su26___fe___re_024",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 24,
    question: "What does BLoC stand for?",
    options: {
      "A": "Business Logic Component",
      "B": "Backend Logic Controller",
      "C": "Build Logic Component",
      "D": "Basic Logic Controller"
    },
    correctAnswer: "A",
    explanation: "BLoC là viết tắt của `Business Logic Component`. Đây là một kiến trúc quản lý trạng thái do Google khởi xướng, dựa trên cơ chế phản ứng dòng dữ liệu (Streams), giúp tách biệt hoàn toàn giữa giao diện người dùng (UI) và logic nghiệp vụ (Business Logic).\n- B, C, D đều là những cụm từ sai chính tả hoặc giả định.",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_024.webp"
  },
  {
    id: "prm393___su26___fe___re_025",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 25,
    question: "Which widget can hide user input text when configured for password entry?",
    options: {
      "A": "TextField",
      "B": "ObscureText",
      "C": "SecureInput",
      "D": "PasswordField"
    },
    correctAnswer: "A",
    explanation: "Widget `TextField` (hoặc `TextFormField`) trong Flutter có thuộc tính `obscureText: true`. Khi bật thuộc tính này, các ký tự người dùng gõ vào sẽ tự động được ẩn đi (thay bằng dấu chấm tròn hoặc sao), chuyên dùng cho các trường nhập mật khẩu hoặc mã PIN nhạy cảm.\n- B (`ObscureText`) là tên thuộc tính (property/named parameter) của TextField chứ không phải tên một widget.\n- C (`SecureInput`) và D (`PasswordField`) là các tên giả định không có trong thư viện Flutter framework.",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_025.webp"
  },
  {
    id: "prm393___su26___fe___re_026",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 26,
    question: "Which sliver is commonly used to display a scrolling list?",
    options: {
      "A": "SliverGrid",
      "B": "SliverList",
      "C": "SliverAppBar",
      "D": "SliverFillRemaining"
    },
    correctAnswer: "B",
    explanation: "Trong `CustomScrollView`, `SliverList` là sliver tiêu chuẩn dùng để hiển thị một danh sách các widget con cuộn theo một chiều (tuyến tính), tương tự như ListView nhưng có khả năng tích hợp linh hoạt với các hiệu ứng cuộn phức tạp của sliver.\n- A (`SliverGrid`) dùng để hiển thị các phần tử dưới dạng lưới 2 chiều.\n- C (`SliverAppBar`) là thanh tiêu đề có thể co giãn/ẩn hiện khi cuộn.\n- D (`SliverFillRemaining`) làm cho widget con chiếm hết phần không gian còn trống của màn hình cuộn.",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_026.webp"
  },
  {
    id: "prm393___su26___fe___re_027",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 27,
    question: "What happens if form validation fails?",
    options: {
      "A": "Form submits",
      "B": "Error messages are shown",
      "C": "App crashes",
      "D": "Data is saved"
    },
    correctAnswer: "B",
    explanation: "Khi gọi phương thức kiểm tra hợp lệ của biểu mẫu `_formKey.currentState!.validate()`, nếu có bất kỳ trường `TextFormField` nào trả về chuỗi thông báo lỗi, phương thức sẽ trả về `false`, ngăn không cho gửi form và tự động hiển thị các dòng thông báo lỗi màu đỏ ngay dưới từng trường nhập liệu tương ứng (Error messages are shown).\n- A, D sai vì khi kiểm tra thất bại, form sẽ bị chặn lại, không gửi đi và không lưu dữ liệu.\n- C sai vì validation thất bại là luồng xử lý nghiệp vụ thông thường, không bao giờ làm crash ứng dụng.",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_027.webp"
  },
  {
    id: "prm393___su26___fe___re_028",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 28,
    question: "Which HTTP method is typically used to retrieve data?",
    options: {
      "A": "POST",
      "B": "PUT",
      "C": "GET",
      "D": "DELETE"
    },
    correctAnswer: "C",
    explanation: "Phương thức `GET` trong giao thức HTTP được thiết kế chuyên dụng để truy xuất và lấy dữ liệu từ máy chủ (retrieve data). Phương thức này mang tính chất an toàn (safe) và không làm biến đổi trạng thái tài nguyên trên server.\n- A (`POST`) dùng để gửi dữ liệu lên máy chủ nhằm tạo mới tài nguyên.\n- B (`PUT`) dùng để cập nhật hoặc thay thế toàn bộ tài nguyên hiện có.\n- D (`DELETE`) dùng để xóa tài nguyên trên máy chủ.",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_028.webp"
  },
  {
    id: "prm393___su26___fe___re_029",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 29,
    question: "Why should authentication state be centralized?",
    options: {
      "A": "Reduce UI code",
      "B": "Ensure consistent access control",
      "C": "Improve animations",
      "D": "Simplify layout"
    },
    correctAnswer: "B",
    explanation: "Tập trung hóa trạng thái xác thực (Authentication state) tại một điểm quản lý trung tâm (như AuthBloc/AuthNotifier) giúp ứng dụng đảm bảo kiểm soát truy cập nhất quán trên toàn hệ thống (Ensure consistent access control). Khi trạng thái đổi từ đăng nhập sang đăng xuất (hoặc token hết hạn), toàn bộ các màn hình bảo vệ sẽ tự động được cập nhật hoặc điều hướng về trang đăng nhập một cách đồng bộ và an toàn.\n- A, D sai vì tập trung state không nhằm mục đích giảm code giao diện hay đơn giản layout.\n- C sai vì không liên quan đến hiệu suất hay thiết kế của animations.",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_029.webp"
  },
  {
    id: "prm393___su26___fe___re_030",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 30,
    question: "Which Dart keyword is used to define a constant value at compile time?",
    options: {
      "A": "final",
      "B": "static",
      "C": "const",
      "D": "var"
    },
    correctAnswer: "C",
    explanation: "Từ khóa `const` trong Dart dùng để tạo hằng số tại thời điểm biên dịch (compile-time constant). Giá trị của biến `const` bắt buộc phải được tính toán và xác định trước khi chương trình thực thi, và nó hoàn toàn bất biến (canonicalized in memory).\n- A (`final`) là biến chỉ gán một lần duy nhất, nhưng giá trị có thể được khởi tạo tại thời điểm chạy (runtime constant, ví dụ `final now = DateTime.now();`).\n- B (`static`) dùng để khai báo biến hoặc phương thức cấp lớp (class variable/method).\n- D (`var`) khai báo biến thông thường có thể thay đổi giá trị.",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_030.webp"
  },
  {
    id: "prm393___su26___fe___re_031",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 31,
    question: "Which status code indicates resource not found?",
    options: {
      "A": "200",
      "B": "301",
      "C": "404",
      "D": "500"
    },
    correctAnswer: "C",
    explanation: "Mã trạng thái phản hồi HTTP `404 Not Found` là mã chuẩn thuộc nhóm Client Error (4xx), biểu thị rằng máy chủ không tìm thấy tài nguyên theo đường dẫn URI mà client đã yêu cầu.\n- A (`200 OK`) biểu thị yêu cầu thành công.\n- B (`301 Moved Permanently`) biểu thị tài nguyên đã được chuyển vĩnh viễn sang địa chỉ mới.\n- D (`500 Internal Server Error`) biểu thị máy chủ gặp lỗi nội bộ trong quá trình xử lý yêu cầu.",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_031.webp"
  },
  {
    id: "prm393___su26___fe___re_032",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 32,
    question: "What represents the output of a BLoC?",
    options: {
      "A": "Events",
      "B": "Widgets",
      "C": "States",
      "D": "Controllers"
    },
    correctAnswer: "C",
    explanation: "Trong kiến trúc BLoC (Business Logic Component):\n- Đầu vào (Input): là các `Events` do người dùng hoặc hệ thống gửi tới.\n- Đầu ra (Output): là các `States` mới được phát ra (emit) từ BLoC để tầng giao diện (BlocBuilder/BlocConsumer) lắng nghe và vẽ lại tương ứng.\n- B sai vì Widgets là thành phần UI nhận State để hiển thị, không phải đầu ra của BLoC.\n- D sai vì Controllers là thành phần điều khiển, không đại diện cho output theo mô hình BLoC.",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_032.webp"
  },
  {
    id: "prm393___su26___fe___re_033",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 33,
    question: "Which widget is most commonly used to arrange children vertically?",
    options: {
      "A": "Row",
      "B": "Stack",
      "C": "Column",
      "D": "Expanded"
    },
    correctAnswer: "C",
    explanation: "Widget `Column` là widget cơ bản và phổ biến nhất trong Flutter để sắp xếp danh sách các widget con theo trục dọc (vertically) từ trên xuống dưới.\n- A (`Row`) dùng để sắp xếp các widget con theo trục ngang (horizontally).\n- B (`Stack`) dùng để xếp chồng các widget con lên nhau theo trục sâu (Z-axis).\n- D (`Expanded`) là widget co giãn được đặt bên trong Row hoặc Column để lấp đầy không gian còn trống.",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_033.webp"
  },
  {
    id: "prm393___su26___fe___re_034",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 34,
    question: "Which curve creates a bounce effect?",
    options: {
      "A": "linear",
      "B": "easeIn",
      "C": "bounceOut",
      "D": "decelerate"
    },
    correctAnswer: "C",
    explanation: "Trong thư viện hoạt họa của Flutter, `Curves.bounceOut` là đường cong diễn hoạt mô phỏng hiệu ứng nảy (bounce effect), giống như một quả bóng rơi xuống sàn và nảy lên vài lần trước khi dừng lại ở điểm cuối.\n- A (`linear`) là chuyển động tuyến tính đều, không thay đổi vận tốc.\n- B (`easeIn`) bắt đầu chuyển động chậm và tăng tốc dần.\n- D (`decelerate`) bắt đầu chuyển động nhanh và giảm tốc dần về đích.",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_034.webp"
  },
  {
    id: "prm393___su26___fe___re_035",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 35,
    question: "Which test runs fastest?",
    options: {
      "A": "Integration test",
      "B": "Widget test",
      "C": "Unit test",
      "D": "Manual test"
    },
    correctAnswer: "C",
    explanation: "Trong các loại kiểm thử phần mềm, `Unit test` chạy nhanh nhất vì nó chỉ thực thi các hàm, phương thức hoặc lớp đơn lẻ trên môi trường Dart VM độc lập mà không cần khởi tạo framework giao diện người dùng hay kết nối với thiết bị mô phỏng/thực tế.\n- B (`Widget test`) chạy chậm hơn vì phải giả lập môi trường cây widget và render frame.\n- A (`Integration test`) chạy chậm nhất trong kiểm thử tự động vì phải cài đặt và thực thi trên emulator/thiết bị thật.\n- D (`Manual test`) là kiểm thử thủ công bởi con người, tốn nhiều thời gian và chi phí nhất.",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_035.webp"
  },
  {
    id: "prm393___su26___fe___re_036",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 36,
    question: "What is the main purpose of hot reload in Flutter?",
    options: {
      "A": "Improve runtime performance",
      "B": "Instantly reflect code changes in UI",
      "C": "Publish apps faster",
      "D": "Reduce memory usage"
    },
    correctAnswer: "B",
    explanation: "Mục đích cốt lõi của tính năng `Hot Reload` trong Flutter là lập tức phản ánh các thay đổi mã nguồn Dart lên giao diện người dùng (Instantly reflect code changes in UI) mà không cần phải khởi động lại toàn bộ ứng dụng và vẫn giữ nguyên trạng thái ứng dụng hiện tại (state preservation), giúp rút ngắn đáng kể chu kỳ lập trình.\n- A sai vì Hot Reload chỉ là công cụ hỗ trợ phát triển (development), không làm tăng hiệu năng khi app chạy thực tế.\n- C sai vì publish app liên quan đến khâu build release và quy trình duyệt ứng dụng của store.\n- D sai vì Hot Reload không có chức năng giảm tiêu thụ bộ nhớ RAM.",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_036.webp"
  },
  {
    id: "prm393___su26___fe___re_037",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 37,
    question: "Why should database operations be asynchronous?",
    options: {
      "A": "Simplify syntax",
      "B": "Avoid blocking UI thread",
      "C": "Reduce code",
      "D": "Improve theme"
    },
    correctAnswer: "B",
    explanation: "Các thao tác với cơ sở dữ liệu (đọc, ghi, truy vấn đĩa cứng) thường có độ trễ I/O nhất định. Nếu thực hiện đồng bộ trên luồng chính (Main/UI thread), chúng sẽ làm đóng băng giao diện người dùng và gây sụt giảm khung hình nghiêm trọng. Do đó, các thao tác này bắt buộc phải thực thi bất đồng bộ (asynchronous dùng Future/Stream) để tránh làm nghẽn luồng UI (Avoid blocking UI thread).\n- A, C sai vì code bất đồng bộ với async/await cần xử lý ngoại lệ và luồng cẩn thận hơn, không nhằm rút gọn cú pháp.\n- D sai vì database không liên quan gì đến theme giao diện.",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_037.webp"
  },
  {
    id: "prm393___su26___fe___re_038",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 38,
    question: "What is the primary purpose of ThemeData in Flutter?",
    options: {
      "A": "Manage navigation",
      "B": "Define application-wide visual styles",
      "C": "Handle state changes",
      "D": "Control animations"
    },
    correctAnswer: "B",
    explanation: "`ThemeData` trong Flutter được sử dụng để định nghĩa phong cách hình ảnh và màu sắc nhất quán trên phạm vi toàn ứng dụng (Define application-wide visual styles), bao gồm màu sắc chủ đạo, phông chữ, kiểu dáng nút bấm, AppBar và hỗ trợ chuyển đổi giữa chế độ Light và Dark Mode.\n- A sai vì điều hướng được quản lý bởi Navigator.\n- C sai vì quản lý trạng thái thuộc phạm vi của State Management (setState, Provider, BLoC).\n- D sai vì animation do AnimationController và Curves điều khiển.",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_038.webp"
  },
  {
    id: "prm393___su26___fe___re_039",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 39,
    question: "Why should API responses be mapped to models?",
    options: {
      "A": "Reduce JSON size",
      "B": "Ensure type safety",
      "C": "Speed up UI",
      "D": "Improve theme"
    },
    correctAnswer: "B",
    explanation: "Dữ liệu trả về từ API là các chuỗi JSON được phân tích thành `Map<String, dynamic>`. Việc chuyển đổi map này thành các đối tượng Model lớp Dart có cấu trúc giúp đảm bảo an toàn kiểu dữ liệu (Ensure type safety), tận dụng tính năng tự động gợi ý mã (auto-completion) của IDE và bắt lỗi sai tên trường/sai kiểu ngay tại thời điểm compile-time thay vì gây crash runtime.\n- A sai vì việc tạo class model không làm giảm kích thước gói tin JSON truyền tải qua mạng.\n- C, D sai vì mapping model không trực tiếp làm tăng tốc độ render hay cải thiện theme giao diện.",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_039.webp"
  },
  {
    id: "prm393___su26___fe___re_040",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 40,
    question: "How can data be passed to a new screen?",
    options: {
      "A": "Using global variables",
      "B": "Via constructor arguments",
      "C": "Using ThemeData",
      "D": "Using Scaffold"
    },
    correctAnswer: "B",
    explanation: "Cách chính thống, an toàn và trực quan nhất để truyền dữ liệu tới một màn hình mới trong Flutter là thông qua các tham số khởi tạo của hàm khởi tạo (Via constructor arguments) của Widget màn hình đó (ví dụ: `Navigator.push(context, MaterialPageRoute(builder: (_) => DetailScreen(data: item)))`).\n- A (Using global variables) là một antipattern nguy hiểm làm mất tính đóng gói và khó kiểm thử.\n- C (ThemeData) dùng để cấu hình giao diện hình ảnh.\n- D (Scaffold) là widget cung cấp bố cục trang.",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_040.webp"
  },
  {
    id: "prm393___su26___fe___re_041",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 41,
    question: "What role does the Flutter framework play in application development?",
    options: {
      "A": "It manages database servers",
      "B": "It provides UI components and rendering logic",
      "C": "It replaces the operating system",
      "D": "It runs backend business logic"
    },
    correctAnswer: "B",
    explanation: "Flutter là một UI toolkit đa nền tảng. Tầng Flutter Framework (viết bằng Dart) cung cấp toàn bộ kho thành phần giao diện (UI components như Material & Cupertino widgets), hệ thống hoạt họa, xử lý cử chỉ và logic kết xuất (rendering logic) để tạo nên giao diện mượt mà.\n- A, D sai vì Flutter hoạt động ở phía client, không quản lý database server hay chạy logic nghiệp vụ backend máy chủ.\n- C sai vì Flutter chạy bên trên hệ điều hành của thiết bị chứ không thay thế hệ điều hành.",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_041.webp"
  },
  {
    id: "prm393___su26___fe___re_042",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 42,
    question: "What is the main benefit of using Maps in Dart?",
    options: {
      "A": "Storing values without keys",
      "B": "Storing key-value pairs",
      "C": "Rendering UI components",
      "D": "Managing asynchronous tasks"
    },
    correctAnswer: "B",
    explanation: "Trong ngôn ngữ Dart, `Map` là một cấu trúc dữ liệu tập hợp liên kết giữa các cặp khóa và giá trị (Storing key-value pairs), cho phép tra cứu (lookup), thêm hoặc cập nhật giá trị dựa trên khóa duy nhất với hiệu năng trung bình cực nhanh O(1).\n- A sai vì tập hợp lưu trữ giá trị không cần khóa là `List` hoặc `Set`.\n- C sai vì Map là cấu trúc dữ liệu thuần túy, không có nhiệm vụ render giao diện UI.\n- D sai vì quản lý tác vụ bất đồng bộ thuộc về `Future` và `Stream`.",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_042.webp"
  },
  {
    id: "prm393___su26___fe___re_043",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 43,
    question: "Which Flutter service simplifies authentication implementation?",
    options: {
      "A": "sqflite",
      "B": "Firebase Authentication",
      "C": "Provider",
      "D": "http"
    },
    correctAnswer: "B",
    explanation: "`Firebase Authentication` là dịch vụ Backend-as-a-Service do Google cung cấp, tích hợp sẵn các phương thức xác thực người dùng phổ biến (Email/Mật khẩu, Google, Apple, số điện thoại OTP,...), tự động quản lý phiên đăng nhập và bảo mật token, giúp việc triển khai tính năng đăng nhập trong Flutter trở nên vô cùng nhanh chóng và tin cậy.\n- A (`sqflite`) là plugin quản lý cơ sở dữ liệu SQLite cục bộ.\n- C (`Provider`) là giải pháp quản lý trạng thái và tiêm phụ thuộc.\n- D (`http`) là thư viện gửi yêu cầu mạng HTTP đơn thuần.",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_043.webp"
  },
  {
    id: "prm393___su26___fe___re_044",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 44,
    question: "Why should animations be disposed properly?",
    options: {
      "A": "Improve UI",
      "B": "Prevent memory leaks",
      "C": "Speed up builds",
      "D": "Fix layout"
    },
    correctAnswer: "B",
    explanation: "Các đối tượng hoạt họa như `AnimationController` gắn liền với TickerProvider để đồng bộ với tần số quét của màn hình (vsync). Nếu không gọi `controller.dispose()` khi widget bị hủy, Ticker và các listener vẫn tiếp tục hoạt động ngầm trong bộ nhớ, dẫn đến hiện tượng rò rỉ bộ nhớ nghiêm trọng (Prevent memory leaks) và lãng phí CPU.\n- A, D sai vì việc dispose controller khi màn hình đóng không tác động trực tiếp lên thiết kế UI hay sửa layout.\n- C sai vì dispose diễn ra lúc runtime khi hủy widget, không liên quan đến tốc độ biên dịch mã nguồn (builds).",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_044.webp"
  },
  {
    id: "prm393___su26___fe___re_045",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 45,
    question: "Which widget is best used to add fixed empty space?",
    options: {
      "A": "Padding",
      "B": "Expanded",
      "C": "SizedBox",
      "D": "Container"
    },
    correctAnswer: "C",
    explanation: "`SizedBox` (ví dụ: `SizedBox(height: 16)` hoặc `SizedBox(width: 8)`) là widget tối ưu và nhẹ nhất trong Flutter để tạo khoảng trống cố định (fixed empty space) giữa các widget con trong `Column` hoặc `Row`. Nó có thể dùng với từ khóa `const` để không bị rebuild lại.\n- A (`Padding`) dùng để tạo khoảng đệm bao quanh một widget con cụ thể, không tối ưu nếu chỉ muốn chừa khoảng trống đơn thuần.\n- B (`Expanded`) kéo giãn widget con để lấp đầy không gian còn lại theo tỷ lệ linh hoạt, không phải kích thước cố định.\n- D (`Container`) có chi phí tạo nặng hơn do chứa nhiều thuộc tính phức tạp (decoration, margin, transform) không cần thiết cho mục đích chỉ chừa khoảng trống.",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_045.webp"
  },
  {
    id: "prm393___su26___fe___re_046",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 46,
    question: "What is the purpose of the Flutter SDK?",
    options: {
      "A": "To store application data permanently",
      "B": "To provide tools and libraries for Flutter development",
      "C": "To deploy applications directly to app stores",
      "D": "To replace the operating system of a device"
    },
    correctAnswer: "B",
    explanation: "Flutter SDK (Software Development Kit) là bộ công cụ phát triển phần mềm toàn diện, cung cấp cho lập trình viên các công cụ dòng lệnh CLI (`flutter run`, `flutter test`, `flutter build`), trình biên dịch Dart, bộ widget framework và các thư viện cần thiết để xây dựng ứng dụng đa nền tảng.\n- A sai vì SDK không phải là hệ thống lưu trữ dữ liệu người dùng.\n- C sai vì SDK chỉ hỗ trợ biên dịch ra file cài đặt (APK, AAB, IPA), việc deploy lên App Store/Google Play cần qua cổng nhà phát triển hoặc CI/CD.\n- D sai vì Flutter SDK hoạt động trên nền tảng hệ điều hành hiện có chứ không thay thế hệ điều hành.",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_046.webp"
  },
  {
    id: "prm393___su26___fe___re_047",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 47,
    question: "What is the main goal of performance optimization in Flutter apps?",
    options: {
      "A": "Improve UI colors",
      "B": "Ensure smooth and responsive UI",
      "C": "Reduce code size",
      "D": "Add features"
    },
    correctAnswer: "B",
    explanation: "Mục tiêu quan trọng hàng đầu của việc tối ưu hóa hiệu năng trong ứng dụng Flutter là đảm bảo giao diện luôn mượt mà và phản hồi tức thì với tương tác người dùng (Ensure smooth and responsive UI), duy trì tốc độ hiển thị khung hình ổn định ở mức 60 FPS hoặc 120 FPS mà không gặp hiện tượng giật cục (jank).\n- A sai vì cải thiện màu sắc giao diện thuộc về mảng thẩm mỹ và thiết kế UI.\n- C sai vì giảm kích thước mã nguồn (code size) chỉ là một yếu tố phụ trợ, không phải mục tiêu cốt lõi của tối ưu runtime.\n- D sai vì bổ sung tính năng mới là mục tiêu phát triển sản phẩm, không phải mục tiêu tối ưu hiệu năng.",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_047.webp"
  },
  {
    id: "prm393___su26___fe___re_048",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 48,
    question: "Which widget is suitable for displaying items in a grid layout?",
    options: {
      "A": "ListView",
      "B": "Column",
      "C": "GridView",
      "D": "Stack"
    },
    correctAnswer: "C",
    explanation: "Widget `GridView` trong Flutter được thiết kế chuyên dụng để hiển thị các phần tử dưới dạng lưới hai chiều (hàng và cột) có khả năng cuộn mượt mà.\n- A (`ListView`) chỉ hỗ trợ hiển thị các phần tử theo dạng danh sách tuyến tính một chiều (dọc hoặc ngang).\n- B (`Column`) xếp các phần tử thành một cột dọc đơn giản và không có cơ chế tự cuộn.\n- D (`Stack`) xếp chồng các widget con lên nhau theo trục Z.",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_048.webp"
  },
  {
    id: "prm393___su26___fe___re_049",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 49,
    question: "Which platforms can Flutter applications target using a single codebase?",
    options: {
      "A": "Android only",
      "B": "iOS only",
      "C": "Android, iOS, web, and desktop",
      "D": "Web servers only"
    },
    correctAnswer: "C",
    explanation: "Flutter là framework đa nền tảng mạnh mẽ cho phép từ một cơ sở mã nguồn duy nhất biên dịch và phát hành ứng dụng lên nhiều nền tảng: Android, iOS, Web cùng các hệ điều hành máy tính để bàn Desktop (Windows, macOS, Linux).\n- A, B sai vì Flutter không bị giới hạn chỉ ở Android hay iOS.\n- D sai vì Flutter tập trung vào phát triển giao diện ứng dụng client, không phải máy chủ web backend.",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_049.webp"
  },
  {
    id: "prm393___su26___fe___re_050",
    exam: "PRM393 - SU26 - FE - RE",
    questionNumber: 50,
    question: "Which Flutter plugin provides SQLite support?",
    options: {
      "A": "hive",
      "B": "moor",
      "C": "sqflite",
      "D": "shared_preferences"
    },
    correctAnswer: "C",
    explanation: "`sqflite` là plugin chính thức và phổ biến nhất trong hệ sinh thái Flutter cung cấp hỗ trợ tương tác với cơ sở dữ liệu quan hệ SQLite trên Android, iOS và macOS.\n- A (`hive`) là cơ sở dữ liệu NoSQL dạng key-value nhẹ viết thuần bằng Dart.\n- B (`moor` - nay là Drift) là thư viện reactive persistence cấp cao hơn bọc bên ngoài SQLite.\n- D (`shared_preferences`) dùng để lưu trữ key-value các giá trị nguyên thủy đơn giản.",
    image: "PRM393 - SU26 - FE - RE/PRM393 SU26 FE RE_050.webp"
  }
];
