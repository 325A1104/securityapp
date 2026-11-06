export interface Kotodama {
  id: string;
  code: string;
  category: string;
  title: string;
  shortTitle: string;
  description: string;
  iconName: string;
}

export interface Scenario {
  id: number;
  chapterNumber: number;
  themeTitle: string;
  category: string;
  suspectName: string;
  suspectTitle: string;
  suspectQuote: string;
  contradictionPart: string;
  correctKotodamaId: string;
  correctKotodamaTitle: string;
  explanation: string;
  threatDetails: string;
  avatarType: 'accountant' | 'newbie' | 'assistant' | 'planner' | 'teleworker' | 'sales' | 'infra' | 'dev' | 'junior' | 'admin';
}

export const KOTODAMA_LIST: Kotodama[] = [
  {
    id: 'koto_1',
    code: '基本原則',
    category: '全員共通',
    title: '【全員で共有する5原則 / 役職・緊急性を理由に手順を省略しない】',
    shortTitle: '役職・緊急性で手順を省略しない',
    description: '「社長から」「至急」であっても正規の送金・確認手順をスキップすることは厳禁。詐欺の常套句を見抜く鉄則。',
    iconName: 'ShieldAlert'
  },
  {
    id: 'koto_2',
    code: '1-1',
    category: '認証・ID管理',
    title: '【1-1 パスワードは組織が承認した方法で保管する】',
    shortTitle: '承認された方法でパスワード保管',
    description: '平文テキストやメモアプリ保存は端末紛失・マルウェア・クラウド同期で一網打尽に。承認されたパスワードマネージャー等を利用。',
    iconName: 'KeyRound'
  },
  {
    id: 'koto_3',
    code: '3-6',
    category: 'Web・端末操作',
    title: '【3-6 偽の修復に従ってコマンドを実行しない】',
    shortTitle: '偽修復に従ってコマンド実行しない',
    description: '「Ctrl+Vで貼り付けてEnter」と促す手口（ClickFix攻撃）等、画面の指示通りに端末コマンドを打つ行為を徹底排除。',
    iconName: 'Terminal'
  },
  {
    id: 'koto_4',
    code: '4-1',
    category: 'AI・新技術',
    title: '【4-1 AIに入力できる情報を事前に決める】',
    shortTitle: 'AI入力情報の事前ルール策定',
    description: '未承認AIへの機密データ・個人情報の投入は外部学習や情報漏洩を招く。組織のガイドラインで定めた情報のみ使用。',
    iconName: 'Bot'
  },
  {
    id: 'koto_5',
    code: '5-2',
    category: '端末・物理管理',
    title: '【5-2 離席時はロックする】',
    shortTitle: 'わずかな離席時も必ず画面ロック',
    description: 'カフェのトイレやオフィス内の短時間離席でも、覗き見やUSB機器の接続、不正送信の格好の標的。Win+L等で即時ロック。',
    iconName: 'Lock'
  },
  {
    id: 'koto_6',
    code: '8-4',
    category: 'ソーシャル工学',
    title: '【8-4 AI合成音声・映像を本人確認の決め手にしない】',
    shortTitle: 'AI音声・映像を本人確認にしない',
    description: 'ディープフェイク技術により上司や取引先の顔・声は精巧に模倣可能。振込先変更等はあらかじめ決めた別ルート（電話等）で確認。',
    iconName: 'Video'
  },
  {
    id: 'koto_7',
    code: '9-1',
    category: 'データ保護',
    title: '【9-1 同期・共有フォルダとバックアップの違いを理解する】',
    shortTitle: '同期とバックアップの違いを理解',
    description: 'リアルタイム同期は、感染・暗号化・誤削除も即座に同期される。世代管理や変更不可の隔離保管こそが「バックアップ」。',
    iconName: 'FolderSync'
  },
  {
    id: 'koto_8',
    code: '9-4',
    category: 'データ保護',
    title: '【9-4 バックアップの1つはネットワークから切り離す】',
    shortTitle: 'バックアップの1つをオフライン分離',
    description: 'PCに常時マウントされた外付けHDDはランサムウェアの巻き添えで暗号化される。オフライン（エアギャップ）保管が必須。',
    iconName: 'HardDrive'
  },
  {
    id: 'koto_9',
    code: '11-1',
    category: 'インシデント初動',
    title: '【11-1 疑いの段階で、速やかに報告する】',
    shortTitle: '疑いの段階で速やかに報告',
    description: '「怒られたくない」「勘違いかも」と確証を待つ時間が被害を数十倍に拡大させる。誤報であっても即座の報告を徹底。',
    iconName: 'AlertOctagon'
  },
  {
    id: 'koto_10',
    code: '11-2',
    category: 'インシデント初動',
    title: '【11-2 感染が疑われる端末をネットワークから隔離する】',
    shortTitle: '感染疑い端末をネットから物理隔離',
    description: '慌てて再起動すると揮発メモリ（RAM）内の証拠が消え、検知回避型マルウェアが常駐を完了する。まずLAN線抜去・Wi-Fi切断！',
    iconName: 'WifiOff'
  }
];

export const SCENARIOS: Scenario[] = [
  {
    id: 1,
    chapterNumber: 1,
    themeTitle: '全員で共有する基本ルール',
    category: '組織の鉄則',
    suspectName: '慌てる経理担当',
    suspectTitle: '超高校級の送金デスク',
    suspectQuote: '「急ぎの案件だし社長からのチャット指示だから、送金手順を飛ばしてすぐ振り込んでも問題ないよね！」',
    contradictionPart: '送金手順を飛ばしてすぐ振り込んでも問題ない',
    correctKotodamaId: 'koto_1',
    correctKotodamaTitle: '【全員で共有する5原則 / 役職・緊急性を理由に手順を省略しない】',
    explanation: '役職や緊急性を理由に確認手順を省略させるのは詐欺（ビジネスメール詐欺・BEC）の典型です。手順通りに確認することが重要です。',
    threatDetails: '「社長から急ぎの送金指示」は最も被害額の大きいサイバー詐欺の手口です。正規の二重チェックや電話確認プロトコルを徹底しましょう。',
    avatarType: 'accountant'
  },
  {
    id: 2,
    chapterNumber: 2,
    themeTitle: 'パスワード保管',
    category: '認証セキュリティ',
    suspectName: '面倒くさがりの新入社員',
    suspectTitle: '超高校級の効率厨',
    suspectQuote: '「複雑なパスワードを覚えるのは大変だから、スマホのメモ帳アプリに平文で全部保存してあるよ！」',
    contradictionPart: 'スマホのメモ帳アプリに平文で全部保存してある',
    correctKotodamaId: 'koto_2',
    correctKotodamaTitle: '【1-1 パスワードは組織が承認した方法で保管する】',
    explanation: '平文のメモ帳保存は感染や同期で一括漏洩します。組織指定のパスワードマネージャー等を使いましょう。',
    threatDetails: '暗号化されていない平文メモは、不正アプリによる読み取りや、クラウドアカウント乗っ取り時にすべての重要パスワードが一網打尽に奪われます。',
    avatarType: 'newbie'
  },
  {
    id: 3,
    chapterNumber: 3,
    themeTitle: '偽サイト・コマンド実行（ClickFix攻撃）',
    category: 'Webセキュリティ',
    suspectName: '素直すぎるアシスタント',
    suspectTitle: '超高校級の指示待ち人間',
    suspectQuote: '「画面が固まったから、画面の指示通りPowerShellに修復コマンドを貼り付けて実行したよ！」',
    contradictionPart: '画面の指示通りPowerShellに修復コマンドを貼り付けて実行',
    correctKotodamaId: 'koto_3',
    correctKotodamaTitle: '【3-6 偽の修復に従ってコマンドを実行しない】',
    explanation: '画面の指示でコマンドを貼り付けさせるClickFix攻撃です。不審な指示でコマンドを実行してはいけません。',
    threatDetails: '「ロボットではありません確認（reCAPTCHA）」や「エラー修復」を装い、ユーザー自ら端末にウイルスダウンロードコマンドを貼り付けさせる悪質な最新手法です。',
    avatarType: 'assistant'
  },
  {
    id: 4,
    chapterNumber: 4,
    themeTitle: '生成AIへの入力',
    category: 'AIガバナンス',
    suspectName: '効率化を急ぐ企画マン',
    suspectTitle: '超高校級の時短オタク',
    suspectQuote: '「未発表の新製品の資料をサクッと要約したかったから、無料の個人向け生成AIに入力してまとめたよ！」',
    contradictionPart: '未発表の新製品の資料を、無料の個人向け生成AIに入力',
    correctKotodamaId: 'koto_4',
    correctKotodamaTitle: '【4-1 AIに入力できる情報を事前に決める】',
    explanation: '未承認のAIに機密情報を入れると外部学習やデータ漏洩に繋がります。許可された情報のみを入力します。',
    threatDetails: '個人向け無料生成AIサービスの中には入力データを機械学習のトレーニングに再利用するものがあります。会社の機密情報や個人情報の入力は規約違反・漏洩事故になります。',
    avatarType: 'planner'
  },
  {
    id: 5,
    chapterNumber: 5,
    themeTitle: '物理セキュリティ（離席時）',
    category: '物理・端末管理',
    suspectName: 'ノマド気分のテレワーカー',
    suspectTitle: '超高校級の自由人',
    suspectQuote: '「カフェでトイレに行く間の2分間くらい、PCの画面をつけっぱなしにして離れても大丈夫でしょ！」',
    contradictionPart: '2分間くらい、PCの画面をつけっぱなしにして離れても大丈夫',
    correctKotodamaId: 'koto_5',
    correctKotodamaTitle: '【5-2 離席時はロックする】',
    explanation: 'わずかな離席でも画面撮影や直接の不正操作リスクがあります。必ず画面ロック（Win+Lなど）を行います。',
    threatDetails: '悪意ある第三者が背後からスマートフォンで画面を盗撮したり、小型の悪意あるUSBデバイス（BadUSB）を挿入して乗っ取るには数十秒で十分です。',
    avatarType: 'teleworker'
  },
  {
    id: 6,
    chapterNumber: 6,
    themeTitle: 'AIディープフェイク（なりすまし）',
    category: 'ソーシャル工学',
    suspectName: '人を信じすぎる営業部長',
    suspectTitle: '超高校級のお人好し',
    suspectQuote: '「ビデオ通話で顔も声も取引先の本人だったから、口座変更の連絡を疑わずにそのまま進めたよ！」',
    contradictionPart: '顔も声も取引先の本人だったから、口座変更を疑わずにそのまま進めた',
    correctKotodamaId: 'koto_6',
    correctKotodamaTitle: '【8-4 AI合成音声・映像を本人確認の決め手にしない】',
    explanation: '顔や声はAIで合成できます。口座変更などは映像を過信せず既知の別ルートで確認する必要があります。',
    threatDetails: 'わずか数秒のサンプル音声や顔写真から、リアルタイムのビデオ通話映像すら生成できる時代です。振込先口座の変更などの金銭重要事項は、事前に合意した正規の連絡網で再確認します。',
    avatarType: 'sales'
  },
  {
    id: 7,
    chapterNumber: 7,
    themeTitle: 'バックアップと同期の違い',
    category: 'データ保護',
    suspectName: 'クラウド過信の情シス見習い',
    suspectTitle: '超高校級の初心者ギーク',
    suspectQuote: '「共有フォルダがランサムウェアで暗号化されても、クラウドにリアルタイム同期してるから安全だよね！」',
    contradictionPart: 'リアルタイム同期してるから安全',
    correctKotodamaId: 'koto_7',
    correctKotodamaTitle: '【9-1 同期・共有フォルダとバックアップの違いを理解する】',
    explanation: '同期フォルダは暗号化や削除もそのまま反映されます。過去の状態に戻せる「バックアップ」とは別物です。',
    threatDetails: '同期ツールは「同一状態を保つ」仕組みであるため、端末側でファイルが破壊・暗号化されるとクラウド側も同時に破壊状態に上書きされます。世代復元可能なバックアップが必要です。',
    avatarType: 'infra'
  },
  {
    id: 8,
    chapterNumber: 8,
    themeTitle: 'バックアップのオフライン分離',
    category: 'データ保護',
    suspectName: '自動化大好きエンジニア',
    suspectTitle: '超高校級のスクリプト使い',
    suspectQuote: '「バックアップ用の外付けHDDは、いつでも自動保存できるようにずっとPCに接続したままにしてあるよ！」',
    contradictionPart: '外付けHDDはずっとPCに接続したままにしてある',
    correctKotodamaId: 'koto_8',
    correctKotodamaTitle: '【9-4 バックアップの1つはネットワークから切り離す】',
    explanation: '接続されたままのドライブはランサムウェアに一緒に暗号化されます。オフラインで分離保管が必要です。',
    threatDetails: '最近のランサムウェアは接続された外部ドライブやネットワーク共有をまず探索してバックアップから暗号化・破壊します。物理的に取り外したオフライン保管（3-2-1バックアップルール）が防御の要です。',
    avatarType: 'dev'
  },
  {
    id: 9,
    chapterNumber: 9,
    themeTitle: 'インシデントの報告（初動対応）',
    category: 'インシデント対応',
    suspectName: '怒られたくない若手社員',
    suspectTitle: '超高校級の心配性',
    suspectQuote: '「不審なメールのリンクを開いちゃったけど、怒られるのが怖いから確証がもてるまで報告するのはやめておくよ…」',
    contradictionPart: '怒られるのが怖いから確証がもてるまで報告はやめておく',
    correctKotodamaId: 'koto_9',
    correctKotodamaTitle: '【11-1 疑いの段階で、速やかに報告する】',
    explanation: '報告の遅れは被害を拡大させます。確証や許可を待たず、疑いの段階で速やかに報告するのが鉄則です。',
    threatDetails: 'サイバー攻撃は初動の数分〜数時間で社内ネットワーク全体へ横展開（ラテラルムーブメント）します。叱責を恐れず「もしかしたら」の段階で即時連絡することが会社を救います。',
    avatarType: 'junior'
  },
  {
    id: 10,
    chapterNumber: 10,
    themeTitle: '端末感染時の物理隔離',
    category: 'インシデント対応',
    suspectName: 'パニック状態の総務スタッフ',
    suspectTitle: '超高校級の慌てん坊',
    suspectQuote: '「ウイルス感染の画面が出たから、焦ってPCを再起動してセキュリティソフトでスキャンしてみたよ！」',
    contradictionPart: '焦ってPCを再起動してセキュリティソフトでスキャン',
    correctKotodamaId: 'koto_10',
    correctKotodamaTitle: '【11-2 感染が疑われる端末をネットワークから隔離する】',
    explanation: '再起動はメモリ上の証拠を消す恐れがあります。まずはLANケーブルを抜く等でネットワークから隔離します。',
    threatDetails: '感染時の最優先行動は他のPCへの感染拡大を防ぐための「通信切断（LANケーブル抜去、Wi-Fiオフ）」です。再起動するとフォレンジック調査用のメモリ痕跡が消滅し、ウイルスの自動実行を助けてしまう危険があります。',
    avatarType: 'admin'
  }
];
