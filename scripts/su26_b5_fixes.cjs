// su26_b5_fixes.cjs
// Contains the full 50 questions for PRM393 - SU26 - B5 - FE with fixed options, typos, and rich Vietnamese explanations.

module.exports = [
  {
    id: "prm393___su26___b5___fe_001",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 1,
    question: "Which method saves an integer in SharedPreferences?",
    options: {
      "A": "saveInt()",
      "B": "putInt()",
      "C": "setInt()",
      "D": "writeInt()"
    },
    correctAnswer: "C",
    explanation: "Trong plugin `shared_preferences` của Flutter, phương thức dùng để ghi một giá trị số nguyên vào bộ nhớ cục bộ là `setInt(String key, int value)`. Phương thức này trả về `Future<bool>` cho biết việc lưu trữ có thành công hay không.\n- A (`saveInt()`), B (`putInt()`), D (`writeInt()`) là các tên phương thức không tồn tại trong API của SharedPreferences (tuy Android native dùng `putInt()` nhưng SharedPreferences của Flutter dùng `setInt()`).",
    image: "PRM393 - SU26 - B5 - FE/PRM393 SU26 B5 FE_001.webp"
  },
  {
    id: "prm393___su26___b5___fe_002",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 2,
    question: "What is the purpose of the Flutter SDK?",
    options: {
      "A": "To store application data permanently",
      "B": "To provide tools and libraries for Flutter development",
      "C": "To deploy applications directly to app stores",
      "D": "To replace the operating system of a device"
    },
    correctAnswer: "B",
    explanation: "Flutter SDK (Software Development Kit) cung cấp toàn bộ công cụ dòng lệnh (CLI như `flutter run`, `flutter build`), trình biên dịch Dart, framework UI (widgets, engine) và các thư viện hỗ trợ lập trình viên xây dựng ứng dụng đa nền tảng.\n- A sai vì SDK không phải là kho lưu trữ dữ liệu người dùng.\n- C sai vì SDK chỉ hỗ trợ build gói ứng dụng (APK/IPA), việc phát hành lên store cần thông qua cổng nhà phát triển.\n- D sai vì Flutter hoạt động trên nền hệ điều hành hiện hữu chứ không thay thế hệ điều hành.",
    image: "PRM393 - SU26 - B5 - FE/PRM393 SU26 B5 FE_002.webp"
  },
  {
    id: "prm393___su26___b5___fe_003",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 3,
    question: "What is rebuild scope optimization in Flutter?",
    options: {
      "A": "Reducing widget tree depth",
      "B": "Limiting rebuild to affected widgets",
      "C": "Caching API responses",
      "D": "Using global state"
    },
    correctAnswer: "B",
    explanation: "Tối ưu hóa phạm vi rebuild (Rebuild scope optimization) là kỹ thuật giới hạn việc vẽ lại giao diện chỉ tại đúng các widget có trạng thái thay đổi (Limiting rebuild to affected widgets), ngăn việc rebuild lan rộng ra toàn bộ cây widget cha không cần thiết, giúp duy trì 60/120 FPS.\n- A sai vì giảm độ sâu cây widget không đồng nghĩa với thu hẹp phạm vi rebuild.\n- C sai vì caching API thuộc tầng xử lý dữ liệu mạng.\n- D sai vì dùng global state không đúng cách thậm chí còn làm lan rộng rebuild ngoài ý muốn.",
    image: "PRM393 - SU26 - B5 - FE/PRM393 SU26 B5 FE_003.webp"
  },
  {
    id: "prm393___su26___b5___fe_004",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 4,
    question: "Which widget enables custom scroll effects in Flutter?",
    options: {
      "A": "ListView",
      "B": "SingleChildScrollView",
      "C": "CustomScrollView",
      "D": "Column"
    },
    correctAnswer: "C",
    explanation: "`CustomScrollView` là widget chuyên dùng để tạo các hiệu ứng cuộn phức tạp và tùy biến cao trong Flutter bằng cách kết hợp nhiều slivers khác nhau (như SliverAppBar, SliverList, SliverGrid).\n- A (`ListView`) và B (`SingleChildScrollView`) chỉ hỗ trợ cuộn danh sách tuyến tính đơn giản.\n- D (`Column`) chỉ sắp xếp theo trục dọc và mặc định sẽ gây tràn màn hình (overflow) nếu không đủ chỗ mà không tự cuộn.",
    image: "PRM393 - SU26 - B5 - FE/PRM393 SU26 B5 FE_004.webp"
  },
  {
    id: "prm393___su26___b5___fe_005",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 5,
    question: "What is the primary role of widgets in Flutter?",
    options: {
      "A": "Managing databases",
      "B": "Describing the user interface",
      "C": "Handling network requests",
      "D": "Compiling Dart code"
    },
    correctAnswer: "B",
    explanation: "Trong triết lý thiết kế của Flutter, 'Everything is a widget'. Vai trò trung tâm của widget là mô tả cấu hình giao diện người dùng (Describing the user interface) tại một thời điểm nhất định dựa trên cấu hình và trạng thái hiện tại.\n- A, C sai vì quản trị cơ sở dữ liệu và xử lý network thuộc về tầng Data Source/Repository.\n- D sai vì biên dịch mã nguồn Dart do Dart SDK và Flutter Engine đảm nhiệm.",
    image: "PRM393 - SU26 - B5 - FE/PRM393 SU26 B5 FE_005.webp"
  },
  {
    id: "prm393___su26___b5___fe_006",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 6,
    question: "Why should animations be disposed properly?",
    options: {
      "A": "Improve UI",
      "B": "Prevent memory leaks",
      "C": "Speed up builds",
      "D": "Fix layout"
    },
    correctAnswer: "B",
    explanation: "Các đối tượng AnimationController liên kết với Ticker của hệ điều hành. Nếu không gọi `controller.dispose()` khi widget bị hủy, Ticker và listener vẫn chạy ngầm và lắng nghe tín hiệu làm tươi màn hình, gây rò rỉ bộ nhớ nghiêm trọng (Prevent memory leaks) và làm hao pin, nóng máy.\n- A, D sai vì dispose controller khi đóng màn hình không làm tăng tính thẩm mỹ hay sửa layout.\n- C sai vì việc biên dịch mã nguồn (builds) không phụ thuộc vào vòng đời runtime của animation.",
    image: "PRM393 - SU26 - B5 - FE/PRM393 SU26 B5 FE_006.webp"
  },
  {
    id: "prm393___su26___b5___fe_007",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 7,
    question: "Which package supports BLOC architecture?",
    options: {
      "A": "provider",
      "B": "flutter_bloc",
      "C": "sqflite",
      "D": "http"
    },
    correctAnswer: "B",
    explanation: "Package `flutter_bloc` (kết hợp với thư viện `bloc`) là package chính thức và phổ biến nhất cung cấp các widget và công cụ hỗ trợ triển khai mẫu kiến trúc BLoC (như BlocProvider, BlocBuilder, BlocListener, BlocConsumer).\n- A (`provider`) là thư viện quản lý trạng thái dựa trên InheritedWidget, không chuyên về kiến trúc Event-State của BLoC.\n- C (`sqflite`) là thư viện cơ sở dữ liệu SQLite.\n- D (`http`) là thư viện gọi API mạng.",
    image: "PRM393 - SU26 - B5 - FE/PRM393 SU26 B5 FE_007.webp"
  },
  {
    id: "prm393___su26___b5___fe_008",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 8,
    question: "What is the role of events in BLoC?",
    options: {
      "A": "Store UI",
      "B": "Trigger state changes",
      "C": "Render widgets",
      "D": "Handle layout"
    },
    correctAnswer: "B",
    explanation: "Trong kiến trúc BLoC, các `Events` đóng vai trò là đầu vào (input) đại diện cho các hành động của người dùng (ví dụ: nhấn nút, nhập ký tự) hoặc sự kiện hệ thống, kích hoạt BLoC thực hiện logic và tạo ra trạng thái mới (Trigger state changes).\n- A, D sai vì Events không lưu trữ UI hay xử lý layout.\n- C sai vì việc render widget là nhiệm vụ của Flutter framework khi nhận được State mới.",
    image: "PRM393 - SU26 - B5 - FE/PRM393 SU26 B5 FE_008.webp"
  },
  {
    id: "prm393___su26___fe___b5_009",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 9,
    question: "Why should database operations be asynchronous?",
    options: {
      "A": "Simplify syntax",
      "B": "Avoid blocking UI thread",
      "C": "Reduce code",
      "D": "Improve theme"
    },
    correctAnswer: "B",
    explanation: "Các thao tác với cơ sở dữ liệu liên quan đến đọc/ghi tệp trên đĩa cứng có độ trễ lớn. Bắt buộc phải thực hiện bất đồng bộ (asynchronous) để chạy ngầm và không chiếm dụng luồng chính (Main/UI thread), tránh làm đứng hình hoặc đơ giao diện người dùng (Avoid blocking UI thread).\n- A, C sai vì lập trình bất đồng bộ đòi hỏi cú pháp async/await chặt chẽ hơn, không nhằm đơn giản hóa cú pháp hay giảm lượng code.\n- D sai vì cơ sở dữ liệu không liên quan đến theme giao diện.",
    image: "PRM393 - SU26 - B5 - FE/PRM393 SU26 B5 FE_009.webp"
  },
  {
    id: "prm393___su26___b5___fe_010",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 10,
    question: "Why is logout functionality important?",
    options: {
      "A": "Free memory",
      "B": "End user session securely",
      "C": "Improve UI",
      "D": "Change theme"
    },
    correctAnswer: "B",
    explanation: "Chức năng đăng xuất (Logout) có vai trò bảo mật quan trọng nhất là kết thúc phiên làm việc của người dùng một cách an toàn (End user session securely): hủy bỏ access token/refresh token, xóa thông tin nhạy cảm khỏi bộ nhớ đệm và bảo vệ tài khoản khỏi truy cập trái phép.\n- A sai vì việc giải phóng một lượng nhỏ RAM của phiên đăng nhập không phải mục đích an toàn cốt lõi.\n- C, D sai vì logout không phục vụ cải thiện giao diện hay thay đổi theme.",
    image: "PRM393 - SU26 - B5 - FE/PRM393 SU26 B5 FE_010.webp"
  },
  {
    id: "prm393___su26___b5___fe_011",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 11,
    question: "What is Cubit in BLoC?",
    options: {
      "A": "A testing tool",
      "B": "A simplified version of BLoC without events",
      "C": "A database helper",
      "D": "A widget rendering engine"
    },
    correctAnswer: "B",
    explanation: "`Cubit` là một biến thể rút gọn (simplified version) của BLoC trong hệ sinh thái bloc library. Thay vì phải định nghĩa Event class và dùng `event -> on<Event>` phức tạp, Cubit cho phép gọi trực tiếp các phương thức (functions) để phát ra (emit) các State mới.\n- A sai vì Cubit là state management component, không phải công cụ kiểm thử (kiểm thử bloc dùng bloc_test).\n- C, D sai vì Cubit không phải database helper hay rendering engine.",
    image: "PRM393 - SU26 - B5 - FE/PRM393 SU26 B5 FE_011.webp"
  },
  {
    id: "prm393___su26___b5___fe_012",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 12,
    question: "Which widget helps avoid rebuilding unchanged UI parts?",
    options: {
      "A": "Scaffold",
      "B": "RepaintBoundary",
      "C": "Column",
      "D": "Container"
    },
    correctAnswer: "B",
    explanation: "`RepaintBoundary` tạo ra một Layer riêng biệt trên RenderObject Tree, cô lập khu vực vẽ của widget con khỏi phần còn lại của màn hình. Khi widget con hoặc widget cha vẽ lại, Flutter không cần vẽ lại phần không thay đổi, giúp tối ưu hóa hiệu năng render đáng kể.\n- A (`Scaffold`), C (`Column`), D (`Container`) đều là các widget bố cục thông thường và sẽ vẽ lại cùng với cây con khi có yêu cầu repaint.",
    image: "PRM393 - SU26 - B5 - FE/PRM393 SU26 B5 FE_012.webp"
  },
  {
    id: "prm393___su26___b5___fe_013",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 13,
    question: "Which keyword is used in Dart to pause execution until a Future completes?",
    options: {
      "A": "async",
      "B": "await",
      "C": "future",
      "D": "delay"
    },
    correctAnswer: "B",
    explanation: "Từ khóa `await` trong Dart được đặt trước một biểu thức `Future` để tạm dừng quá trình thực thi của hàm bất đồng bộ hiện tại cho đến khi Future đó hoàn thành và trả về kết quả.\n- A (`async`) là từ khóa dùng ở phần khai báo hàm để đánh dấu hàm đó trả về một Future.\n- C (`future`) và D (`delay`) không phải là từ khóa điều khiển luồng thực thi trong Dart.",
    image: "PRM393 - SU26 - B5 - FE/PRM393 SU26 B5 FE_013.webp"
  },
  {
    id: "prm393___su26___b5___fe_014",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 14,
    question: "What does an integration test verify?",
    options: {
      "A": "Single function",
      "B": "Widget rendering",
      "C": "End-to-end app behavior",
      "D": "Theme consistency"
    },
    correctAnswer: "C",
    explanation: "Kiểm thử tích hợp (Integration Test) kiểm tra toàn bộ ứng dụng từ đầu đến cuối (End-to-end app behavior) trên một thiết bị thật hoặc máy ảo, xác minh sự phối hợp chính xác giữa UI, logic nghiệp vụ, cơ sở dữ liệu và mạng.\n- A (Single function) là phạm vi kiểm tra của Unit Test.\n- B (Widget rendering) là phạm vi kiểm tra của Widget Test.\n- D (Theme consistency) chỉ là một phần nhỏ của UI testing.",
    image: "PRM393 - SU26 - B5 - FE/PRM393 SU26 B5 FE_014.webp"
  },
  {
    id: "prm393___su26___b5___fe_015",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 15,
    question: "Which Flutter service simplifies authentication implementation?",
    options: {
      "A": "sqflite",
      "B": "Firebase Authentication",
      "C": "Provider",
      "D": "http"
    },
    correctAnswer: "B",
    explanation: "`Firebase Authentication` cung cấp giải pháp backend xác thực hoàn chỉnh từ Google với nhiều phương thức tích hợp sẵn (Email/Password, Google, Apple Sign-In, Phone OTP) giúp việc triển khai xác thực trong ứng dụng Flutter trở nên đơn giản và bảo mật.\n- A (`sqflite`) là plugin SQLite cho lưu trữ cục bộ.\n- C (`Provider`) là giải pháp quản lý trạng thái.\n- D (`http`) là thư viện gửi HTTP request cơ bản.",
    image: "PRM393 - SU26 - B5 - FE/PRM393 SU26 B5 FE_015.webp"
  },
  {
    id: "prm393___su26___b5___fe_016",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 16,
    question: "How can data be passed to a new screen?",
    options: {
      "A": "Using global variables",
      "B": "Via constructor arguments",
      "C": "Using ThemeData",
      "D": "Using Scaffold"
    },
    correctAnswer: "B",
    explanation: "Phương pháp chuẩn, trực quan và an toàn kiểu dữ liệu nhất để truyền dữ liệu tới một màn hình mới trong Flutter là thông qua các tham số của hàm khởi tạo (Via constructor arguments) của Widget màn hình đó.\n- A (global variables) là một antipattern nguy hiểm làm mất tính đóng gói.\n- C (ThemeData) dùng để định nghĩa màu sắc và phong cách giao diện.\n- D (Scaffold) là widget cung cấp cấu trúc màn hình chuẩn.",
    image: "PRM393 - SU26 - B5 - FE/PRM393 SU26 B5 FE_016.webp"
  },
  {
    id: "prm393___su26___b5___fe_017",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 17,
    question: "Which HTTP method is typically used to retrieve data?",
    options: {
      "A": "POST",
      "B": "PUT",
      "C": "GET",
      "D": "DELETE"
    },
    correctAnswer: "C",
    explanation: "Phương thức `GET` trong giao thức HTTP được thiết kế chuyên dụng để truy xuất và lấy dữ liệu từ máy chủ (retrieve data). Phương thức này mang tính chất an toàn (safe) và không làm thay đổi trạng thái tài nguyên trên server.\n- A (`POST`) dùng để gửi dữ liệu mới lên máy chủ.\n- B (`PUT`) dùng để cập nhật tài nguyên hiện có.\n- D (`DELETE`) dùng để xóa tài nguyên.",
    image: "PRM393 - SU26 - B5 - FE/PRM393 SU26 B5 FE_017.webp"
  },
  {
    id: "prm393___su26___b5___fe_018",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 18,
    question: "What is implicit animation?",
    options: {
      "A": "Manual controller",
      "B": "Framework-managed animation",
      "C": "Physics engine",
      "D": "Canvas drawing"
    },
    correctAnswer: "B",
    explanation: "Hoạt họa ngầm định (Implicit Animation, ví dụ: AnimatedContainer, AnimatedOpacity) là cơ chế diễn hoạt do Flutter framework tự động quản lý hoàn toàn (Framework-managed animation). Lập trình viên chỉ cần cung cấp giá trị thuộc tính mới và thời lượng (duration), framework sẽ tự tính toán và điều khiển quá trình chuyển đổi mượt mà mà không cần tạo AnimationController thủ công.\n- A (`Manual controller`) là đặc điểm của Explicit Animation.\n- C (`Physics engine`) dùng cho hoạt họa dựa trên mô phỏng vật lý.\n- D (`Canvas drawing`) dùng cho vẽ đồ họa tùy biến bằng CustomPainter.",
    image: "PRM393 - SU26 - B5 - FE/PRM393 SU26 B5 FE_018.webp"
  },
  {
    id: "prm393___su26___b5___fe_019",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 19,
    question: "What is one of the main advantages of Flutter?",
    options: {
      "A": "It requires separate codebases for each platform",
      "B": "It only supports Android development",
      "C": "It uses a single codebase for multiple platforms",
      "D": "It compiles to JavaScript only"
    },
    correctAnswer: "C",
    explanation: "Lợi thế lớn nhất của Flutter là khả năng xây dựng ứng dụng cho nhiều nền tảng (Android, iOS, Web, Windows, macOS, Linux) từ một cơ sở mã nguồn duy nhất (It uses a single codebase for multiple platforms), giúp tiết kiệm chi phí và tối ưu nguồn lực phát triển.\n- A sai vì Flutter không yêu cầu cơ sở mã riêng cho từng nền tảng.\n- B sai vì Flutter hỗ trợ cả iOS, Web, Desktop ngoài Android.\n- D sai vì Flutter biên dịch ra mã máy gốc AOT trên mobile và desktop, không chỉ JavaScript.",
    image: "PRM393 - SU26 - B5 - FE/PRM393 SU26 B5 FE_019.webp"
  },
  {
    id: "prm393___su26___b5___fe_020",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 20,
    question: "What role does the Flutter framework play in application development?",
    options: {
      "A": "It manages database servers",
      "B": "It provides UI components and rendering logic",
      "C": "It replaces the operating system",
      "D": "It runs backend business logic"
    },
    correctAnswer: "B",
    explanation: "Tầng Flutter Framework (viết bằng ngôn ngữ Dart) cung cấp toàn bộ kho thành phần giao diện (UI components phong phú) và logic kết xuất (rendering logic) giúp lập trình viên nhanh chóng xây dựng ứng dụng với giao diện sống động và hiệu năng cao.\n- A, D sai vì Flutter là giải pháp client-side, không quản lý server cơ sở dữ liệu hay chạy logic máy chủ backend.\n- C sai vì Flutter chạy bên trên hệ điều hành của thiết bị chứ không thay thế hệ điều hành.",
    image: "PRM393 - SU26 - B5 - FE/PRM393 SU26 B5 FE_020.webp"
  },
  {
    id: "prm393___su26___b5___fe_021",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 21,
    question: "What format is most commonly used in REST APIs?",
    options: {
      "A": "XML",
      "B": "HTML",
      "C": "JSON",
      "D": "Plain text"
    },
    correctAnswer: "C",
    explanation: "Định dạng JSON (JavaScript Object Notation) là định dạng trao đổi dữ liệu tiêu chuẩn và phổ biến nhất trong các dịch vụ web RESTful API hiện đại do tính chất gọn nhẹ, định dạng có cấu trúc rõ ràng và dễ dàng phân tích cú pháp (parse) trong hầu hết các ngôn ngữ lập trình kể cả Dart.\n- A (XML) là định dạng cũ hơn, nặng nề và phức tạp hơn.\n- B (HTML) dùng cho trang web hiển thị.\n- D (Plain text) thiếu cấu trúc dữ liệu kiểu đối tượng.",
    image: "PRM393 - SU26 - B5 - FE/PRM393 SU26 B5 FE_021.webp"
  },
  {
    id: "prm393___su26___b5___fe_022",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 22,
    question: "What is the main concept behind navigation in Flutter using the Navigator widget?",
    options: {
      "A": "Queue",
      "B": "Stack",
      "C": "Tree",
      "D": "Graph"
    },
    correctAnswer: "B",
    explanation: "Hệ thống điều hướng trong Flutter thông qua widget `Navigator` hoạt động theo mô hình ngăn xếp (Stack) LIFO (Last-In, First-Out). Khi mở màn hình mới, route được đẩy vào đỉnh stack (`push`), và khi quay lại, màn hình ở đỉnh stack được lấy ra (`pop`).\n- A (`Queue`) hoạt động theo nguyên tắc FIFO (vào trước ra trước).\n- C (`Tree`) và D (`Graph`) là các cấu trúc phân nhánh hoặc mạng lưới không mô tả đúng bản chất xếp chồng các màn hình của Navigator.",
    image: "PRM393 - SU26 - B5 - FE/PRM393 SU26 B5 FE_022.webp"
  },
  {
    id: "prm393___su26___b5___fe_023",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 23,
    question: "What is the main limitation of SharedPreferences?",
    options: {
      "A": "Slow read speed",
      "B": "High memory consumption",
      "C": "Suitable only for simple primitive data",
      "D": "Requires cloud connection"
    },
    correctAnswer: "C",
    explanation: "Hạn chế lớn nhất của `SharedPreferences` là nó chỉ được thiết kế để lưu trữ các kiểu dữ liệu nguyên thủy đơn giản dạng key-value (int, double, bool, String, List<String>). Nó không hỗ trợ truy vấn phức tạp, không có chỉ mục (indexing), và không phù hợp để lưu trữ tập dữ liệu quan hệ hay đối tượng lớn.\n- A sai vì đọc dữ liệu SharedPreferences từ bộ nhớ đệm (in-memory cache) rất nhanh.\n- B sai vì dung lượng SharedPreferences thường rất nhỏ.\n- D sai vì SharedPreferences hoạt động hoàn toàn offline trên máy cục bộ.",
    image: "PRM393 - SU26 - FE - B5_023.webp"
  },
  {
    id: "prm393___su26___b5___fe_024",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 24,
    question: "What does a Tween define?",
    options: {
      "A": "Animation speed",
      "B": "Range between start and end values",
      "C": "Repetition count",
      "D": "Frame rate"
    },
    correctAnswer: "B",
    explanation: "Trong hệ thống animation của Flutter, `Tween` (viết tắt của between) định nghĩa phạm vi ánh xạ giữa giá trị bắt đầu (begin) và giá trị kết thúc (end) của hoạt họa (ví dụ: đổi màu từ đỏ sang xanh, hoặc kích thước từ 0.0 đến 100.0).\n- A sai vì tốc độ hoạt họa do `Duration` và `Curves` quyết định.\n- C sai vì số lần lặp do `controller.repeat()` điều khiển.\n- D sai vì tốc độ khung hình (frame rate) do màn hình thiết bị và Ticker cung cấp.",
    image: "PRM393 - SU26 - B5 - FE/PRM393 SU26 B5 FE_024.webp"
  },
  {
    id: "prm393___su26___b5___fe_025",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 25,
    question: "What is pagination used for?",
    options: {
      "A": "UI animation",
      "B": "Handling large datasets efficiently",
      "C": "Theme management",
      "D": "Authentication"
    },
    correctAnswer: "B",
    explanation: "Phân trang (Pagination) là giải pháp chia nhỏ dữ liệu lớn thành từng trang riêng biệt để tải dần theo nhu cầu (Handling large datasets efficiently), giúp ứng dụng tránh hiện tượng tràn bộ nhớ RAM và giảm đáng kể thời gian chờ đợi phản hồi từ máy chủ.\n- A sai vì phân trang không phải là hiệu ứng chuyển động UI.\n- C, D sai vì phân trang không liên quan đến theme hay xác thực tài khoản.",
    image: "PRM393 - SU26 - B5 - FE/PRM393 SU26 B5 FE_025.webp"
  },
  {
    id: "prm393___su26___b5___fe_026",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 26,
    question: "What is the main purpose of hot reload in Flutter?",
    options: {
      "A": "Improve runtime performance",
      "B": "Instantly reflect code changes in UI",
      "C": "Publish apps faster",
      "D": "Reduce memory usage"
    },
    correctAnswer: "B",
    explanation: "Mục đích cốt lõi của tính năng `Hot Reload` trong Flutter là lập tức cập nhật các thay đổi mã nguồn Dart lên giao diện người dùng (Instantly reflect code changes in UI) mà không cần phải khởi động lại toàn bộ ứng dụng và vẫn giữ nguyên trạng thái ứng dụng hiện tại (state preservation).\n- A sai vì Hot Reload chỉ là công cụ hỗ trợ phát triển (development), không làm tăng hiệu năng khi app chạy thực tế.\n- C sai vì publish app liên quan đến khâu build release và quy trình duyệt ứng dụng của store.\n- D sai vì Hot Reload không có chức năng giảm tiêu thụ bộ nhớ RAM.",
    image: "PRM393 - SU26 - B5 - FE/PRM393 SU26 B5 FE_026.webp"
  },
  {
    id: "prm393___su26___b5___fe_027",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 27,
    question: "What design principle improves form usability?",
    options: {
      "A": "Small tap targets",
      "B": "Complex layouts",
      "C": "Clear validation messages",
      "D": "Hidden buttons"
    },
    correctAnswer: "C",
    explanation: "Cung cấp các thông báo lỗi kiểm tra hợp lệ rõ ràng (Clear validation messages) ngay tại vị trí người dùng nhập liệu sai là nguyên tắc thiết kế quan trọng hàng đầu giúp người dùng dễ dàng nhận biết và khắc phục lỗi, nâng cao đáng kể trải nghiệm biểu mẫu (form usability).\n- A (vùng chạm nhỏ), B (bố cục phức tạp), D (nút bấm bị ẩn) đều là những lỗi thiết kế giao diện tệ hại (bad UX patterns) làm giảm tính khả dụng.",
    image: "PRM393 - SU26 - B5 - FE/PRM393 SU26 B5 FE_027.webp"
  },
  {
    id: "prm393___su26___b5___fe_028",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 28,
    question: "What does a Dart class primarily represent?",
    options: {
      "A": "A UI widget only",
      "B": "A blueprint for creating objects",
      "C": "A database table",
      "D": "A network request"
    },
    correctAnswer: "B",
    explanation: "Trong lập trình hướng đối tượng (OOP) với Dart, một class đóng vai trò là bản thiết kế hay khuôn mẫu (blueprint) định nghĩa các thuộc tính (fields/properties) và hành vi (methods) để tạo ra các đối tượng (objects).\n- A sai vì class trong Dart dùng cho nhiều mục đích (model, service, controller), widget chỉ là trường hợp đặc biệt kế thừa từ Widget.\n- C sai vì class không phải là bảng cơ sở dữ liệu.\n- D sai vì network request là một hành động/tác vụ, không phải vai trò cơ bản của class.",
    image: "PRM393 - SU26 - B5 - FE/PRM393 SU26 B5 FE_028.webp"
  },
  {
    id: "prm393___su26___b5___fe_029",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 29,
    question: "Which practice improves authentication security?",
    options: {
      "A": "Plaintext passwords",
      "B": "Secure token storage",
      "C": "Hardcoded keys",
      "D": "No timeout"
    },
    correctAnswer: "B",
    explanation: "Lưu trữ token xác thực trong vùng nhớ bảo mật được mã hóa của hệ thống (Secure token storage như `flutter_secure_storage` - sử dụng Keychain trên iOS và Keystore/EncryptedSharedPreferences trên Android) là giải pháp tiêu chuẩn giúp bảo vệ token khỏi nguy cơ bị đánh cắp bởi các ứng dụng độc hại.\n- A (mật khẩu dạng văn bản thô), C (hardcode khóa bí mật vào code), D (không bao giờ hết hạn phiên) đều là những lỗ hổng bảo mật cực kỳ nghiêm trọng.",
    image: "PRM393 - SU26 - B5 - FE/PRM393 SU26 B5 FE_029.webp"
  },
  {
    id: "prm393___su26___b5___fe_030",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 30,
    question: "What is the role of BuildContext in Flutter?",
    options: {
      "A": "Store application data",
      "B": "Locate widgets in the widget tree",
      "C": "Manage navigation history",
      "D": "Render UI pixels"
    },
    correctAnswer: "B",
    explanation: "`BuildContext` thực chất là một interface đại diện cho vị trí (Element) của widget cụ thể bên trong cây widget (Locate widgets in the widget tree). Nó được dùng để tra cứu các widget cha cấp cao hơn thông qua `context.dependOnInheritedWidgetOfExactType()` (như MediaQuery.of, Theme.of, Navigator.of).\n- A sai vì BuildContext không có nhiệm vụ lưu trữ dữ liệu ứng dụng.\n- C sai vì lịch sử điều hướng do NavigatorState quản lý.\n- D sai vì việc render pixel lên màn hình do RenderObject đảm nhận.",
    image: "PRM393 - SU26 - B5 - FE/PRM393 SU26 B5 FE_030.webp"
  },
  {
    id: "prm393___su26___b5___fe_031",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 31,
    question: "What does the Padding widget do?",
    options: {
      "A": "Adds empty space around a child widget",
      "B": "Changes background color",
      "C": "Aligns items centrally",
      "D": "Handles gesture events"
    },
    correctAnswer: "A",
    explanation: "Widget `Padding` trong Flutter có vai trò chèn khoảng trống (lề đệm) bao quanh widget con của nó (Adds empty space around a child widget) theo các hướng khác nhau thông qua thuộc tính `EdgeInsets`.\n- B sai vì đổi màu nền là tính năng của `Container` (với `color` hoặc `decoration`) hay `ColoredBox`.\n- C sai vì căn lề giữa dùng `Center` hoặc `Align`.\n- D sai vì xử lý cử chỉ tương tác người dùng dùng `GestureDetector` hoặc `InkWell`.",
    image: "PRM393 - SU26 - B5 - FE/PRM393 SU26 B5 FE_031.webp"
  },
  {
    id: "prm393___su26___b5___fe_032",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 32,
    question: "What is Hive mainly used for?",
    options: {
      "A": "Network calls",
      "B": "Fast, lightweight NoSQL storage",
      "C": "UI layout",
      "D": "Theme configuration"
    },
    correctAnswer: "B",
    explanation: "`Hive` là một cơ sở dữ liệu NoSQL dạng key-value nhẹ và cực nhanh (Fast, lightweight NoSQL storage) được viết hoàn toàn bằng Dart, hỗ trợ mã hóa mạnh mẽ và hoạt động đa nền tảng mà không phụ thuộc vào native dependencies.\n- A sai vì gọi mạng sử dụng thư viện `http` hoặc `dio`.\n- C sai vì bố cục giao diện sử dụng các widget layout của Flutter.\n- D sai vì cấu hình theme sử dụng `ThemeData`.",
    image: "PRM393 - SU26 - B5 - FE/PRM393 SU26 B5 FE_032.webp"
  },
  {
    id: "prm393___su26___b5___fe_033",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 33,
    question: "Why should navigation logic be well-structured?",
    options: {
      "A": "Reduce UI size",
      "B": "Improve maintainability",
      "C": "Increase speed",
      "D": "Avoid widgets"
    },
    correctAnswer: "B",
    explanation: "Cấu trúc điều hướng (navigation) rõ ràng, có tổ chức (như dùng named routes, GoRouter hoặc Router API) giúp mã nguồn ứng dụng phân tách mạch lạc, dễ mở rộng, dễ gỡ lỗi và kiểm thử (Improve maintainability) khi dự án phát triển nhiều màn hình.\n- A sai vì điều hướng không làm giảm kích thước đồ họa của UI.\n- C sai vì tốc độ chuyển trang phụ thuộc vào việc render và dispose widget, không phải do cách tổ chức route.\n- D sai vì Flutter luôn xây dựng trên cây widget, không thể tránh widget.",
    image: "PRM393 - SU26 - B5 - FE/PRM393 SU26 B5 FE_033.webp"
  },
  {
    id: "prm393___su26___b5___fe_034",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 34,
    question: "What is the purpose of onSaved callback?",
    options: {
      "A": "Reset form",
      "B": "Save field value when form is saved",
      "C": "Validate input",
      "D": "Trigger animation"
    },
    correctAnswer: "B",
    explanation: "Trong các trường `TextFormField`, hàm callback `onSaved: (value) { ... }` được tự động gọi khi lập trình viên thực thi lệnh `_formKey.currentState!.save()`. Nó dùng để gán hoặc lưu giá trị của ô nhập liệu vào biến model tương ứng (Save field value when form is saved).\n- A sai vì reset form thực hiện qua `formKey.currentState!.reset()`.\n- C sai vì kiểm tra hợp lệ dữ liệu do callback `validator` đảm nhận.\n- D sai vì callback này không liên quan đến việc kích hoạt hoạt họa.",
    image: "PRM393 - SU26 - B5 - FE/PRM393 SU26 B5 FE_034.webp"
  },
  {
    id: "prm393___su26___b5___fe_035",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 35,
    question: "Which feature of Dart helps prevent null reference errors at compile time?",
    options: {
      "A": "Dynamic typing",
      "B": "Hot reload",
      "C": "Null safety",
      "D": "Asynchronous execution"
    },
    correctAnswer: "C",
    explanation: "Tính năng Sound Null Safety (an toàn rỗng) của Dart phân biệt chặt chẽ giữa các kiểu dữ liệu không thể null (non-nullable) và có thể null (nullable: `Type?`). Trình biên dịch sẽ báo lỗi ngay tại thời điểm compile-time nếu bạn truy cập thuộc tính trên một biến có nguy cơ bị null mà không kiểm tra trước, loại bỏ hoàn toàn lỗi crash runtime kinh điển NullPointer/NullReference.\n- A (Dynamic typing) bỏ qua kiểm tra kiểu tĩnh, làm tăng nguy cơ lỗi runtime.\n- B (Hot reload) là cơ chế nạp lại code trong quá trình debug.\n- D (Asynchronous execution) là cơ chế xử lý bất đồng bộ với Future/Stream.",
    image: "PRM393 - SU26 - B5 - FE/PRM393 SU26 B5 FE_035.webp"
  },
  {
    id: "prm393___su26___b5___fe_036",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 36,
    question: "Which sliver is commonly used to display a scrolling list?",
    options: {
      "A": "SliverGrid",
      "B": "SliverList",
      "C": "SliverAppBar",
      "D": "SliverFillRemaining"
    },
    correctAnswer: "B",
    explanation: "Trong `CustomScrollView`, `SliverList` là sliver tiêu chuẩn dùng để hiển thị một danh sách các widget con cuộn theo một chiều (tuyến tính), tương tự như ListView nhưng có khả năng tích hợp linh hoạt với các hiệu ứng cuộn phức tạp của sliver.\n- A (`SliverGrid`) dùng để hiển thị các phần tử dưới dạng lưới 2 chiều.\n- C (`SliverAppBar`) là thanh tiêu đề có thể co giãn/ẩn hiện khi cuộn.\n- D (`SliverFillRemaining`) làm cho widget con chiếm hết phần không gian còn trống của màn hình cuộn.",
    image: "PRM393 - SU26 - B5 - FE/PRM393 SU26 B5 FE_036.webp"
  },
  {
    id: "prm393___su26___b5___fe_037",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 37,
    question: "In Flutter architecture, which layer is responsible for rendering and uses C++ with Skia?",
    options: {
      "A": "Framework Layer",
      "B": "Engine Layer",
      "C": "Embedder Layer",
      "D": "Widget Layer"
    },
    correctAnswer: "B",
    explanation: "Tầng `Flutter Engine` được viết bằng C/C++ và tích hợp thư viện đồ họa Skia (hoặc Impeller), chịu trách nhiệm thực thi các phép tính toán đồ họa mức thấp, render rasterized pixels, xử lý văn bản và quản lý giao tiếp IPC với nền tảng.\n- A (`Framework Layer`) và D (`Widget Layer`) được viết bằng Dart mức cao, cung cấp API cho lập trình viên ứng dụng.\n- C (`Embedder Layer`) là tầng phụ thuộc nền tảng (Java/Obj-C/C++) để khởi chạy engine và xử lý sự kiện phần cứng.",
    image: "PRM393 - SU26 - B5 - FE/PRM393 SU26 B5 FE_037.webp"
  },
  {
    id: "prm393___su26___b5___fe_038",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 38,
    question: "Which curve creates a bounce effect?",
    options: {
      "A": "linear",
      "B": "easeIn",
      "C": "bounceOut",
      "D": "decelerate"
    },
    correctAnswer: "C",
    explanation: "Trong thư viện hoạt họa của Flutter, `Curves.bounceOut` là đường cong diễn hoạt mô phỏng hiệu ứng nảy (bounce effect), giống như một quả bóng rơi xuống sàn và nảy lên vài lần trước khi dừng lại ở điểm cuối.\n- A (`linear`) là chuyển động tuyến tính đều, không thay đổi vận tốc.\n- B (`easeIn`) bắt đầu chuyển động chậm và tăng tốc dần.\n- D (`decelerate`) bắt đầu chuyển động nhanh và giảm tốc dần về đích.",
    image: "PRM393 - SU26 - B5 - FE/PRM393 SU26 B5 FE_038.webp"
  },
  {
    id: "prm393___su26___b5___fe_039",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 39,
    question: "Which programming language is used to develop Flutter applications?",
    options: {
      "A": "Kotlin",
      "B": "Swift",
      "C": "Dart",
      "D": "JavaScript"
    },
    correctAnswer: "C",
    explanation: "Flutter sử dụng ngôn ngữ lập trình `Dart` (do Google phát triển) làm ngôn ngữ chính thống. Dart cung cấp tính năng hướng đối tượng mạnh mẽ, hỗ trợ sound null safety, cũng như cơ chế biên dịch kép JIT (cho Hot Reload) và AOT (cho bản Release native siêu nhanh).\n- A (Kotlin) là ngôn ngữ phát triển native cho nền tảng Android.\n- B (Swift) là ngôn ngữ phát triển native cho iOS/macOS.\n- D (JavaScript) là ngôn ngữ dùng trong React Native.",
    image: "PRM393 - SU26 - B5 - FE/PRM393 SU26 B5 FE_039.webp"
  },
  {
    id: "prm393___su26___b5___fe_040",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 40,
    question: "When does Flutter rebuild the widget tree?",
    options: {
      "A": "Only on launch",
      "B": "When state changes",
      "C": "Every second",
      "D": "Only on orientation change"
    },
    correctAnswer: "B",
    explanation: "Trong Flutter, cây widget được xây dựng lại (rebuild) khi có sự thay đổi về trạng thái (When state changes, ví dụ khi `setState()` được gọi, hoặc khi Stream/Notifier phát ra giá trị mới, hoặc khi widget cha rebuild truyền thuộc tính mới).\n- A sai vì widget tree liên tục rebuild linh hoạt theo tương tác chứ không chỉ lúc mở app.\n- C sai vì Flutter chỉ rebuild khi có sự kiện/thay đổi trạng thái thực sự, không rebuild vô tội vạ theo chu kỳ giây.\n- D sai vì xoay màn hình chỉ là một trong nhiều trường hợp gây rebuild.",
    image: "PRM393 - SU26 - B5 - FE/PRM393 SU26 B5 FE_040.webp"
  },
  {
    id: "prm393___su26___b5___fe_041",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 41,
    question: "What is the main risk of improper state management?",
    options: {
      "A": "UI inconsistencies and hard-to-maintain code",
      "B": "Larger app bundle size",
      "C": "Higher CPU usage during compilation",
      "D": "Loss of source code"
    },
    correctAnswer: "A",
    explanation: "Quản lý trạng thái kém hoặc không nhất quán dẫn đến việc dữ liệu hiển thị trên giao diện bị lệch lạc (UI inconsistencies), xung đột giữa các màn hình và cấu trúc code trở nên rối rắm, cực kỳ khó bảo trì và sửa lỗi (hard-to-maintain code).\n- B sai vì kích thước file cài đặt (bundle size) phụ thuộc vào tài nguyên và thư viện phụ thuộc, không do kiến trúc quản lý state.\n- C, D sai vì quản lý trạng thái không ảnh hưởng tới CPU lúc biên dịch và không làm mất mã nguồn.",
    image: "PRM393 - SU26 - B5 - FE/PRM393 SU26 B5 FE_041.webp"
  },
  {
    id: "prm393___su26___b5___fe_042",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 42,
    question: "According to the testing pyramid, which type of test should be used the least?",
    options: {
      "A": "Unit Tests",
      "B": "Widget Tests",
      "C": "Integration Tests",
      "D": "Debug Tests"
    },
    correctAnswer: "C",
    explanation: "Theo mô hình kim tự tháp kiểm thử (Testing Pyramid), `Integration Tests` nằm ở đỉnh tháp nên có số lượng ít nhất (should be used the least) vì chi phí viết, thời gian thực thi chậm và tài nguyên máy đòi hỏi cao nhất so với Unit Tests và Widget Tests.\n- A (`Unit Tests`) nằm ở đáy kim tự tháp, chạy nhanh nhất và nên viết nhiều nhất.\n- B (`Widget Tests`) nằm ở tầng giữa của kim tự tháp.\n- D (`Debug Tests`) không phải là một tầng chuẩn trong kim tự tháp kiểm thử.",
    image: "PRM393 - SU26 - B5 - FE/PRM393 SU26 B5 FE_042.webp"
  },
  {
    id: "prm393___su26___b5___fe_043",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 43,
    question: "Which approach helps reduce unnecessary widget rebuilds?",
    options: {
      "A": "Using large widget classes",
      "B": "Splitting widgets into smaller components",
      "C": "Calling setState() at the root",
      "D": "Avoiding const constructors"
    },
    correctAnswer: "B",
    explanation: "Việc phân tách giao diện thành các widget nhỏ độc lập (Splitting widgets into smaller components) kết hợp sử dụng `const` constructor giúp thu hẹp phạm vi gọi lại hàm `build()`. Khi một trạng thái nhỏ thay đổi, chỉ có widget con tương ứng bị rebuild thay vì rebuild toàn bộ màn hình lớn.\n- A và C sai vì widget to và gọi setState ở widget gốc sẽ buộc toàn bộ cây con vẽ lại.\n- D sai vì tránh dùng const sẽ làm tăng chi phí rebuild chứ không giảm.",
    image: "PRM393 - SU26 - B5 - FE/PRM393 SU26 B5 FE_043.webp"
  },
  {
    id: "prm393___su26___b5___fe_044",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 44,
    question: "Which component is required to run and test Flutter applications on a local machine?",
    options: {
      "A": "A cloud hosting service",
      "B": "A physical server",
      "C": "An emulator or physical device",
      "D": "A database management system"
    },
    correctAnswer: "C",
    explanation: "Để chạy, xem trước và kiểm thử ứng dụng Flutter trực tiếp trên máy tính cá nhân, bạn cần có một máy ảo (Android Emulator / iOS Simulator) hoặc một thiết bị di động thật (physical device) kết nối qua cáp USB/WiFi.\n- A, B sai vì dịch vụ đám mây (cloud hosting) hay máy chủ vật lý (physical server) dùng cho backend/deployment, không bắt buộc để chạy app Flutter cục bộ.\n- D sai vì DBMS không phải thành phần bắt buộc để khởi chạy một ứng dụng di động.",
    image: "PRM393 - SU26 - B5 - FE/PRM393 SU26 B5 FE_044.webp"
  },
  {
    id: "prm393___su26___b5___fe_045",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 45,
    question: "Which Dart keyword is used to define a constant value at compile time?",
    options: {
      "A": "final",
      "B": "static",
      "C": "const",
      "D": "var"
    },
    correctAnswer: "C",
    explanation: "Từ khóa `const` trong Dart dùng để tạo hằng số tại thời điểm biên dịch (compile-time constant). Giá trị của biến `const` bắt buộc phải được tính toán và xác định trước khi chương trình thực thi, và nó hoàn toàn bất biến (canonicalized in memory).\n- A (`final`) là biến chỉ gán một lần duy nhất, nhưng giá trị có thể được khởi tạo tại thời điểm chạy (runtime constant, ví dụ `final now = DateTime.now();`).\n- B (`static`) dùng để khai báo biến hoặc phương thức cấp lớp (class variable/method).\n- D (`var`) khai báo biến thông thường có thể thay đổi giá trị.",
    image: "PRM393 - SU26 - B5 - FE/PRM393 SU26 B5 FE_045.webp"
  },
  {
    id: "prm393___su26___b5___fe_046",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 46,
    question: "Which widget is primarily used as the structural foundation of a Material Design screen in Flutter?",
    options: {
      "A": "Container",
      "B": "Scaffold",
      "C": "Column",
      "D": "Stack"
    },
    correctAnswer: "B",
    explanation: "`Scaffold` là widget nền móng tiêu chuẩn cung cấp cấu trúc layout hoàn chỉnh theo chuẩn Material Design cho một màn hình, hỗ trợ sẵn các khe gắn tiện ích như AppBar, Body, FloatingActionButton, Drawer, BottomNavigationBar và SnackBar.\n- A (`Container`), C (`Column`), D (`Stack`) chỉ là các widget bố cục đơn lẻ, không cung cấp khung cấu trúc màn hình chuẩn Material Design.",
    image: "PRM393 - SU26 - B5 - FE/PRM393 SU26 B5 FE_046.webp"
  },
  {
    id: "prm393___su26___b5___fe_047",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 47,
    question: "Which status code indicates server error?",
    options: {
      "A": "200",
      "B": "301",
      "C": "404",
      "D": "500"
    },
    correctAnswer: "D",
    explanation: "Mã trạng thái HTTP `500 Internal Server Error` thuộc nhóm 5xx biểu thị máy chủ gặp sự cố nội bộ và không thể xử lý yêu cầu hợp lệ từ phía client.\n- A (`200 OK`) là mã thành công.\n- B (`301 Moved Permanently`) là mã chuyển hướng tài nguyên.\n- C (`404 Not Found`) là mã lỗi từ phía client khi không tìm thấy tài nguyên.",
    image: "PRM393 - SU26 - B5 - FE/PRM393 SU26 B5 FE_047.webp"
  },
  {
    id: "prm393___su26___b5___fe_048",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 48,
    question: "Why should authentication state be centralized?",
    options: {
      "A": "Reduce UI code",
      "B": "Ensure consistent access control",
      "C": "Improve animations",
      "D": "Simplify layout"
    },
    correctAnswer: "B",
    explanation: "Tập trung hóa trạng thái xác thực (Authentication state) tại một điểm quản lý trung tâm (như AuthBloc/AuthNotifier) giúp ứng dụng đảm bảo kiểm soát truy cập nhất quán trên toàn hệ thống (Ensure consistent access control). Khi trạng thái đổi từ đăng nhập sang đăng xuất (hoặc token hết hạn), toàn bộ các màn hình bảo vệ sẽ tự động được cập nhật hoặc điều hướng về trang đăng nhập một cách đồng bộ và an toàn.\n- A, D sai vì tập trung state không nhằm mục đích giảm code giao diện hay đơn giản layout.\n- C sai vì không liên quan đến hiệu suất hay thiết kế của animations.",
    image: "PRM393 - SU26 - B5 - FE/PRM393 SU26 B5 FE_048.webp"
  },
  {
    id: "prm393___su26___b5___fe_049",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 49,
    question: "Which package is commonly used for Flutter testing?",
    options: {
      "A": "flutter_test",
      "B": "http",
      "C": "provider",
      "D": "sqflite"
    },
    correctAnswer: "A",
    explanation: "`flutter_test` là thư viện kiểm thử cốt lõi đi kèm sẵn trong Flutter SDK, cung cấp các hàm chuyên dụng để viết Unit test và Widget test (như `testWidgets`, `WidgetTester`, `find`, `expect`, `pumpWidget`).\n- B (`http`) dùng để gửi HTTP request.\n- C (`provider`) dùng để quản lý trạng thái.\n- D (`sqflite`) dùng để lưu trữ cơ sở dữ liệu SQLite cục bộ.",
    image: "PRM393 - SU26 - B5 - FE/PRM393 SU26 B5 FE_049.webp"
  },
  {
    id: "prm393___su26___b5___fe_050",
    exam: "PRM393 - SU26 - B5 - FE",
    questionNumber: 50,
    question: "Why are const widgets recommended?",
    options: {
      "A": "They improve readability",
      "B": "They reduce rebuild cost",
      "C": "They add state",
      "D": "They handle navigation"
    },
    correctAnswer: "B",
    explanation: "Sử dụng từ khóa `const` với constructor của widget cho phép Flutter khởi tạo instance đó duy nhất một lần tại thời điểm biên dịch và lưu vào bộ nhớ dùng chung. Trong các lần rebuild tiếp theo của widget cha, Flutter sẽ bỏ qua việc xây dựng lại widget const này, giúp giảm đáng kể chi phí rebuild (They reduce rebuild cost) và tối ưu FPS.\n- A sai vì cải thiện khả năng đọc mã chỉ là yếu tố phụ, mục đích cốt lõi là tối ưu hiệu năng.\n- C sai vì const widget là bất biến hoàn toàn, không thể có state biến đổi.\n- D sai vì const widget không liên quan đến xử lý điều hướng.",
    image: "PRM393 - SU26 - B5 - FE/PRM393 SU26 B5 FE_050.webp"
  }
];
