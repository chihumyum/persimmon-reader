import type { Metadata } from "next";
import { LegalShell } from "../legal/LegalShell";

const githubUrl = "https://github.com/chihumyum/persimmon-reader";
const supportEmail = "support@persimmon.cc";
const supportMailto = `mailto:${supportEmail}?subject=Persimmon%20Support`;

export const metadata: Metadata = {
  title: "Support — Persimmon",
  description: "Get help with Persimmon, EPUB imports, and Google Drive sync.",
};

export default function SupportPage() {
  return (
    <LegalShell title="Support" subtitle="支持" lastUpdated="August 12, 2026">
      <section className="legal-document" lang="zh-Hans">
        <h2>中文</h2>
        <p>
          如果你在使用 Persimmon
          时遇到问题，请发送邮件联系我们。我们会尽力帮助你解决 EPUB 导入、阅读或
          Google Drive 同步问题。
        </p>
        <p>
          <a className="support-contact-link" href={supportMailto}>
            联系支持
          </a>
        </p>

        <h3>支持的电子书</h3>
        <p>
          Persimmon 支持无 DRM、可重排的 EPUB 2/3 电子书。目前不支持
          PDF、MOBI、DRM 加密或固定版式 EPUB。
        </p>

        <h3>Google Drive 同步</h3>
        <p>
          同步功能是可选的，只使用 Persimmon 专属的隐藏 App Data
          目录，不会读取普通 Google Drive 文件。同步数据从 App
          直接发送到你自己的 Google Drive，不经过 Persimmon
          开发者控制的服务器。请在所有设备上连接同一个 Google 账号。
        </p>

        <h3>报告问题</h3>
        <p>
          邮件中请附上设备型号、系统和 App
          版本、复现步骤，以及相关错误提示或截图。请勿发送密码、Google
          授权码或未经授权的电子书文件。发送邮件后，Persimmon
          开发者会收到并仅为处理支持请求
          使用你提供的地址和内容；详情及删除方式请查看
          <a href="/privacy">隐私政策</a>。
        </p>

        <h3>GitHub</h3>
        <p>
          你也可以在 <a href={githubUrl}>GitHub</a> 查看 Persimmon
          项目并提交技术问题。
        </p>
      </section>

      <section className="legal-document" lang="en">
        <h2>English</h2>
        <p>
          If you run into a problem with Persimmon, email us for help with EPUB
          imports, reading, or Google Drive sync.
        </p>
        <p>
          <a className="support-contact-link" href={supportMailto}>
            Email support
          </a>
        </p>

        <h3>Supported books</h3>
        <p>
          Persimmon supports DRM-free, reflowable EPUB 2/3 books. PDF, MOBI,
          DRM-protected, and fixed-layout EPUB files are not currently
          supported.
        </p>

        <h3>Google Drive sync</h3>
        <p>
          Sync is optional and uses Persimmon&apos;s private App Data folder. It
          cannot read ordinary files in your Google Drive. Sync data travels
          directly from the app to your own Google Drive without passing through
          a server controlled by the Persimmon developer. Connect the same
          Google account on each device.
        </p>

        <h3>Reporting a problem</h3>
        <p>
          Include your device model, operating system and app version, steps to
          reproduce the problem, and any relevant error message or screenshot.
          Do not send passwords, Google authorization codes, or ebook files you
          are not authorized to share. After you send an email, the Persimmon
          developer receives the address and content you provide and uses it
          only to handle the support request. See the{" "}
          <a href="/privacy">Privacy Policy</a> for details and deletion
          options.
        </p>

        <h3>GitHub</h3>
        <p>
          You can also view the Persimmon project and report technical issues on{" "}
          <a href={githubUrl}>GitHub</a>.
        </p>
      </section>
    </LegalShell>
  );
}
