import type { Metadata } from "next";
import { LegalShell } from "../legal/LegalShell";

export const metadata: Metadata = {
  title: "Privacy Policy — Persimmon",
  description:
    "How Persimmon handles local reading data and optional Google Drive sync.",
};

export default function PrivacyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      subtitle="隐私政策"
      lastUpdated="August 12, 2026"
    >
      <section className="legal-document" lang="zh-Hans">
        <h2>中文</h2>
        <p>
          Persimmon（柿子阅读）是一款本地优先的 EPUB 阅读器。除非你主动启用
          Google Drive 同步或发送支持邮件，Persimmon 开发者不会从 App
          接收你的个人数据。本政策说明 App、Google
          和其他相关服务分别如何处理数据。
        </p>

        <h3>我们不做什么</h3>
        <ul>
          <li>不提供 Persimmon 自有账号；</li>
          <li>不运营广告或第一方行为分析服务，也不进行跨 App 跟踪；</li>
          <li>不出售个人信息，也不把阅读内容用于广告或训练模型。</li>
        </ul>

        <h3>本机数据</h3>
        <p>
          你选择导入的
          EPUB、封面、章节资源、阅读进度、阅读设置，以及下载或导入的字体，
          默认都只保存在设备的 App 私有目录中。Persimmon
          只读取你通过系统文件选择器明确选择的文件；本机处理的数据不会由此自动发送给开发者。
        </p>

        <h3>可选的 Google Drive 同步</h3>
        <p>
          只有在你主动连接 Google Drive 后，Persimmon 才会申请
          <code>drive.appdata</code> 权限。它只能访问 Google Drive 为 Persimmon
          提供的隐藏 <code>appDataFolder</code>，不能读取或修改普通 Drive
          中可见的文件。
        </p>
        <p>
          同步内容包括原始
          EPUB、书籍元数据、稳定阅读位置、显示进度、删除状态、随机设备标识，
          以及同步所需的账户标识。随机设备标识由 App
          生成，仅用于区分同步设备，不是广告标识符或硬件序列号。App 还会请求
          Google 账户标识，并在 Google 返回时使用邮箱和显示名称来确认
          当前连接的账户和隔离本机同步状态。
        </p>
        <p>
          这些同步数据由 App 通过 Google API 直接写入你自己的 Google Drive
          隐藏目录，不经过也不存储在 Persimmon 开发者控制的服务器中。Persimmon
          开发者不会接收、托管、查看或将这些书籍与阅读记录用于其他目的。
        </p>
        <p>
          Google 及其 SDK 会根据 Google 的政策处理授权信息、账户与设备标识、IP
          地址等网络元数据和 SDK 使用数据。Google iOS SDK
          的隐私声明还列出姓名、邮箱、电话号码、粗略位置、用户或
          设备标识及其他使用数据，可能用于 App 功能或 SDK 分析；Persimmon
          自身不会请求设备位置、通讯录、麦克风、照片库或广告标识符。Persimmon
          对从 Google API 获得的原始或衍生用户数据的使用遵守
          <a href="https://developers.google.com/terms/api-services-user-data-policy">
            Google API Services User Data Policy
          </a>
          ，包括 Limited Use 要求，并且仅用于用户主动启用的同步功能。
        </p>

        <h3>网络、共享与安全</h3>
        <p>
          Drive 同步连接 Google API；可选字体下载连接固定的 GitHub 地址。Google
          和 GitHub 可能按各自政策处理 IP
          地址、请求时间和常规网络日志。网络传输使用 HTTPS，本机数据由操作系统
          App 沙盒保护，Google 授权状态和访问令牌由 Google SDK
          与平台安全机制管理，不会发送到 Persimmon 开发者控制的服务器。
        </p>
        <p>
          “发送反馈”只会在你确认后打开邮件或系统分享服务。如果你把反馈发送至
          <a href="mailto:support@persimmon.cc">support@persimmon.cc</a>
          ，Persimmon 开发者会收到你的发件地址、邮件正文、预填的设备与 App
          版本信息，以及你主动添加的附件，
          并仅将其用于处理支持请求。你可以通过同一邮箱要求删除支持记录。
        </p>

        <h3>本网站</h3>
        <p>
          Persimmon 官网不包含广告、行为分析脚本或营销 Cookie。网站由 Cloudflare
          托管；Cloudflare 可能为内容交付、安全和防滥用处理 IP
          地址、请求头和常规访问日志，具体以
          <a href="https://www.cloudflare.com/privacypolicy/">
            Cloudflare 隐私政策
          </a>
          为准。
        </p>

        <h3>保留与删除</h3>
        <ul>
          <li>
            删除单本书会删除本机资源；连接同步时，删除状态会同步到其他设备。
          </li>
          <li>
            “断开连接”会撤销或清理本机 Google 授权，但不会删除 Drive
            中已有的同步数据。
          </li>
          <li>
            “清空本机数据”会删除本机书库、进度、设置与字体，并断开
            Drive；云端副本保留。
          </li>
          <li>
            “清空 Google Drive 数据”会删除隐藏目录中的 EPUB
            与同步记录并断开连接；本机副本保留。
          </li>
          <li>
            卸载 App 会删除本机数据；如需删除云端副本，请在卸载前使用 App
            内的清除功能。
          </li>
        </ul>

        <h3>联系与变更</h3>
        <p>
          隐私问题请联系{" "}
          <a href="mailto:support@persimmon.cc">support@persimmon.cc</a>。
          政策发生实质变化时，Persimmon 会更新本页日期，并在适当情况下通过 App
          告知用户。
        </p>
      </section>

      <section className="legal-document" lang="en">
        <h2>English</h2>
        <p>
          Persimmon is a local-first EPUB reader. Unless you enable Google Drive
          sync or send a support request, the Persimmon developer does not
          receive personal data from the app. This policy explains how the app,
          Google, and related services process data.
        </p>

        <h3>What we do not do</h3>
        <ul>
          <li>Persimmon does not provide its own user account.</li>
          <li>
            Persimmon operates no advertising or first-party behavioral
            analytics service and does not track users across apps.
          </li>
          <li>
            We do not sell personal information or use reading content for
            advertising or model training.
          </li>
        </ul>

        <h3>Data on your device</h3>
        <p>
          EPUB files you select, covers, generated book resources, reading
          progress, reading settings, and fonts you download or import remain in
          the app&apos;s private storage by default. Persimmon reads only files
          you explicitly select through the system file picker. On-device
          processing does not by itself send that data to the developer.
        </p>

        <h3>Optional Google Drive sync</h3>
        <p>
          Persimmon requests the <code>drive.appdata</code> scope only after you
          choose to connect Google Drive. It can access only Persimmon&apos;s
          hidden <code>appDataFolder</code> and cannot read or modify files
          visible in your regular Drive.
        </p>
        <p>
          Synced data includes original EPUB files, book metadata, stable
          reading locations, display progress, deletion records, a random device
          identifier, and the account identifier needed for sync. The random
          identifier is generated by the app solely to distinguish sync devices;
          it is not an advertising identifier or hardware serial number. The app
          also requests a Google account identifier and, when Google returns
          them, uses the email address and display name to identify the
          connected account and separate local sync state.
        </p>
        <p>
          The app sends this data directly through Google APIs to your own
          hidden Google Drive folder. It does not pass through or reside on
          servers controlled by the Persimmon developer. The developer does not
          receive, host, inspect, or repurpose your books or reading records.
        </p>
        <p>
          Google and its SDKs process authorization information, account and
          device identifiers, network metadata such as IP addresses, and SDK
          usage data under Google&apos;s policies. The Google iOS SDK privacy
          declaration also lists name, email address, phone number, coarse
          location, user or device identifiers, and other usage data for app
          functionality or SDK analytics. Persimmon itself does not request
          device location, contacts, microphone, photo library, or advertising
          identifier access. Persimmon&apos;s use of raw or derived user data
          received from Google APIs adheres to the
          <a href="https://developers.google.com/terms/api-services-user-data-policy">
            Google API Services User Data Policy
          </a>
          , including the Limited Use requirements, and is limited to the sync
          feature you enable.
        </p>

        <h3>Network access, sharing, and security</h3>
        <p>
          Drive sync connects to Google APIs, and optional font downloads
          connect to fixed GitHub URLs. Google and GitHub may process IP
          addresses, request times, and ordinary network logs under their
          respective policies. Network transfers use HTTPS, local data is
          protected by the operating system&apos;s app sandbox, and
          Google&apos;s SDK and platform security facilities manage
          authorization state and access tokens without sending them to a
          Persimmon-controlled server.
        </p>
        <p>
          Send Feedback opens an email or system sharing service only after you
          confirm. If you email
          <a href="mailto:support@persimmon.cc">support@persimmon.cc</a>, the
          Persimmon developer receives your sender address, message, prefilled
          device and app version details, and attachments you choose to add, and
          uses them only to handle your support request. You may use the same
          address to request deletion of support records.
        </p>

        <h3>This website</h3>
        <p>
          The Persimmon website contains no advertising, behavioral analytics
          scripts, or marketing cookies. Cloudflare hosts the site and may
          process IP addresses, request headers, and ordinary access logs for
          content delivery, security, and abuse prevention under the
          <a href="https://www.cloudflare.com/privacypolicy/">
            Cloudflare Privacy Policy
          </a>
          .
        </p>

        <h3>Retention and deletion</h3>
        <ul>
          <li>
            Deleting one book removes its local resources; while sync is
            connected, the deletion propagates.
          </li>
          <li>
            Disconnect clears or revokes local Google authorization but does not
            delete existing Drive data.
          </li>
          <li>
            Clear Local Data removes the local library, progress, settings, and
            fonts, then disconnects Drive; cloud copies remain.
          </li>
          <li>
            Clear Google Drive Data removes EPUB and sync records from the
            hidden Drive folder and disconnects; local copies remain.
          </li>
          <li>
            Uninstalling removes local app data. Use the in-app cloud deletion
            action before uninstalling to remove cloud copies.
          </li>
        </ul>

        <h3>Contact and changes</h3>
        <p>
          For privacy questions, contact{" "}
          <a href="mailto:support@persimmon.cc">support@persimmon.cc</a>.
          Material changes will be reflected by the date on this page and, where
          appropriate, communicated in the app.
        </p>
      </section>
    </LegalShell>
  );
}
