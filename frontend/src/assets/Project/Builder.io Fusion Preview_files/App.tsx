import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/client/App.tsx");import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;

let prevRefreshReg;
let prevRefreshSig;

if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react-swc can't detect preamble. Something is wrong."
    );
  }

  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/code/client/App.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import __vite__cjsImport2_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=72e2eca7"; const _jsxDEV = __vite__cjsImport2_react_jsxDevRuntime["jsxDEV"]; const _Fragment = __vite__cjsImport2_react_jsxDevRuntime["Fragment"];
var _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$(), _s3 = $RefreshSig$(), _s4 = $RefreshSig$(), _s5 = $RefreshSig$();
import "/client/global.css?t=1761473064498";
import __vite__cjsImport4_react from "/node_modules/.vite/deps/react.js?v=6e804a0a"; const React = __vite__cjsImport4_react.__esModule ? __vite__cjsImport4_react.default : __vite__cjsImport4_react; const useState = __vite__cjsImport4_react["useState"]; const useEffect = __vite__cjsImport4_react["useEffect"]; const useMemo = __vite__cjsImport4_react["useMemo"];
import { Toaster } from "/client/components/ui/toaster.tsx";
import __vite__cjsImport6_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=75f8d533"; const createRoot = __vite__cjsImport6_reactDom_client["createRoot"];
import { Toaster as Sonner } from "/client/components/ui/sonner.tsx";
import { TooltipProvider } from "/client/components/ui/tooltip.tsx";
import { QueryClient, QueryClientProvider } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=ebfa88bc";
// === Configuration & Data ===
const SCHOOL_NAME = "Kiyumba Technical Secondary School";
const TAGLINE = "Fostering Innovation, Nurturing Excellence";
const PRIMARY_COLOR = 'blue-900';
const ACCENT_COLOR = 'amber-500';
const PAGES = {
    HOME: 'Home',
    ABOUT: 'About Us',
    ACADEMICS: 'Academics',
    ADMISSIONS: 'Admissions',
    NEWS: 'News & Events',
    GALLERY: 'Gallery',
    CONTACT: 'Contact'
};
const DUMMY_NEWS = [
    {
        id: 1,
        title: "Students Win National Robotics Challenge",
        date: "Oct 20, 2025",
        summary: "Our tech students secured the top prize, showcasing remarkable skill in automation and design."
    },
    {
        id: 2,
        title: "Annual Sports Day Success",
        date: "Oct 15, 2025",
        summary: "A day filled with spirited competition, teamwork, and athletic achievements across all grade levels."
    },
    {
        id: 3,
        title: "Principal's Address on New Curriculum",
        date: "Sep 28, 2025",
        summary: "An outline of the new integrated technical and academic syllabus rolling out next term."
    }
];
const DUMMY_FACULTY = [
    {
        name: "Dr. Lwasa Kate",
        role: "Principal",
        specialty: "Educational Leadership"
    },
    {
        name: "Mr. John Mbabazi",
        role: "Head of Technical Dept.",
        specialty: "Mechanical Engineering"
    },
    {
        name: "Ms. Sarah Namakula",
        role: "Head of Humanities",
        specialty: "Literature and History"
    }
];
// === Utility Icons ===
const Icon = ({ name, className = "w-6 h-6" })=>{
    _s();
    const SvgMap = useMemo(()=>({
            Home: ({ className })=>/*#__PURE__*/ _jsxDEV("svg", {
                    className: className,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                        /*#__PURE__*/ _jsxDEV("path", {
                            d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 40,
                            columnNumber: 253
                        }, this),
                        /*#__PURE__*/ _jsxDEV("polyline", {
                            points: "9 22 9 12 15 12 15 22"
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 40,
                            columnNumber: 311
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/app/code/client/App.tsx",
                    lineNumber: 40,
                    columnNumber: 53
                }, this),
            Users: ({ className })=>/*#__PURE__*/ _jsxDEV("svg", {
                    className: className,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                        /*#__PURE__*/ _jsxDEV("path", {
                            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 41,
                            columnNumber: 254
                        }, this),
                        /*#__PURE__*/ _jsxDEV("circle", {
                            cx: "9",
                            cy: "7",
                            r: "4"
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 41,
                            columnNumber: 307
                        }, this),
                        /*#__PURE__*/ _jsxDEV("path", {
                            d: "M22 21v-2a4 4 0 0 0-3-3.87"
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 41,
                            columnNumber: 336
                        }, this),
                        /*#__PURE__*/ _jsxDEV("path", {
                            d: "M16 3.13a4 4 0 0 1 0 7.75"
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 41,
                            columnNumber: 374
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/app/code/client/App.tsx",
                    lineNumber: 41,
                    columnNumber: 54
                }, this),
            BookOpen: ({ className })=>/*#__PURE__*/ _jsxDEV("svg", {
                    className: className,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                        /*#__PURE__*/ _jsxDEV("path", {
                            d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 42,
                            columnNumber: 257
                        }, this),
                        /*#__PURE__*/ _jsxDEV("path", {
                            d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 42,
                            columnNumber: 309
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/app/code/client/App.tsx",
                    lineNumber: 42,
                    columnNumber: 57
                }, this),
            ClipboardList: ({ className })=>/*#__PURE__*/ _jsxDEV("svg", {
                    className: className,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                        /*#__PURE__*/ _jsxDEV("rect", {
                            width: "8",
                            height: "4",
                            x: "8",
                            y: "2",
                            rx: "1",
                            ry: "1"
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 43,
                            columnNumber: 262
                        }, this),
                        /*#__PURE__*/ _jsxDEV("path", {
                            d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 43,
                            columnNumber: 316
                        }, this),
                        /*#__PURE__*/ _jsxDEV("path", {
                            d: "M12 11h4"
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 43,
                            columnNumber: 400
                        }, this),
                        /*#__PURE__*/ _jsxDEV("path", {
                            d: "M12 15h4"
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 43,
                            columnNumber: 420
                        }, this),
                        /*#__PURE__*/ _jsxDEV("path", {
                            d: "M8 11h.01"
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 43,
                            columnNumber: 440
                        }, this),
                        /*#__PURE__*/ _jsxDEV("path", {
                            d: "M8 15h.01"
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 43,
                            columnNumber: 461
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/app/code/client/App.tsx",
                    lineNumber: 43,
                    columnNumber: 62
                }, this),
            Calendar: ({ className })=>/*#__PURE__*/ _jsxDEV("svg", {
                    className: className,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                        /*#__PURE__*/ _jsxDEV("path", {
                            d: "M8 2v4"
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 44,
                            columnNumber: 257
                        }, this),
                        /*#__PURE__*/ _jsxDEV("path", {
                            d: "M16 2v4"
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 44,
                            columnNumber: 275
                        }, this),
                        /*#__PURE__*/ _jsxDEV("rect", {
                            width: "18",
                            height: "18",
                            x: "3",
                            y: "4",
                            rx: "2"
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 44,
                            columnNumber: 294
                        }, this),
                        /*#__PURE__*/ _jsxDEV("path", {
                            d: "M3 10h18"
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 44,
                            columnNumber: 343
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/app/code/client/App.tsx",
                    lineNumber: 44,
                    columnNumber: 57
                }, this),
            Image: ({ className })=>/*#__PURE__*/ _jsxDEV("svg", {
                    className: className,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                        /*#__PURE__*/ _jsxDEV("rect", {
                            width: "18",
                            height: "18",
                            x: "3",
                            y: "3",
                            rx: "2",
                            ry: "2"
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 45,
                            columnNumber: 254
                        }, this),
                        /*#__PURE__*/ _jsxDEV("circle", {
                            cx: "9",
                            cy: "9",
                            r: "2"
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 45,
                            columnNumber: 310
                        }, this),
                        /*#__PURE__*/ _jsxDEV("path", {
                            d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 45,
                            columnNumber: 339
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/app/code/client/App.tsx",
                    lineNumber: 45,
                    columnNumber: 54
                }, this),
            Mail: ({ className })=>/*#__PURE__*/ _jsxDEV("svg", {
                    className: className,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                        /*#__PURE__*/ _jsxDEV("rect", {
                            width: "20",
                            height: "16",
                            x: "2",
                            y: "4",
                            rx: "2"
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 46,
                            columnNumber: 253
                        }, this),
                        /*#__PURE__*/ _jsxDEV("path", {
                            d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 46,
                            columnNumber: 302
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/app/code/client/App.tsx",
                    lineNumber: 46,
                    columnNumber: 53
                }, this),
            LogIn: ({ className })=>/*#__PURE__*/ _jsxDEV("svg", {
                    className: className,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                        /*#__PURE__*/ _jsxDEV("path", {
                            d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 47,
                            columnNumber: 254
                        }, this),
                        /*#__PURE__*/ _jsxDEV("polyline", {
                            points: "10 17 15 12 10 7"
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 47,
                            columnNumber: 307
                        }, this),
                        /*#__PURE__*/ _jsxDEV("line", {
                            x1: "15",
                            x2: "3",
                            y1: "12",
                            y2: "12"
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 47,
                            columnNumber: 344
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/app/code/client/App.tsx",
                    lineNumber: 47,
                    columnNumber: 54
                }, this),
            Menu: ({ className })=>/*#__PURE__*/ _jsxDEV("svg", {
                    className: className,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                        /*#__PURE__*/ _jsxDEV("line", {
                            x1: "3",
                            x2: "21",
                            y1: "12",
                            y2: "12"
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 48,
                            columnNumber: 253
                        }, this),
                        /*#__PURE__*/ _jsxDEV("line", {
                            x1: "3",
                            x2: "21",
                            y1: "6",
                            y2: "6"
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 48,
                            columnNumber: 291
                        }, this),
                        /*#__PURE__*/ _jsxDEV("line", {
                            x1: "3",
                            x2: "21",
                            y1: "18",
                            y2: "18"
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 48,
                            columnNumber: 327
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/app/code/client/App.tsx",
                    lineNumber: 48,
                    columnNumber: 53
                }, this),
            X: ({ className })=>/*#__PURE__*/ _jsxDEV("svg", {
                    className: className,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                        /*#__PURE__*/ _jsxDEV("path", {
                            d: "M18 6 6 18"
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 49,
                            columnNumber: 250
                        }, this),
                        /*#__PURE__*/ _jsxDEV("path", {
                            d: "m6 6 12 12"
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 49,
                            columnNumber: 272
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/app/code/client/App.tsx",
                    lineNumber: 49,
                    columnNumber: 50
                }, this),
            ClipboardCheck: ({ className })=>/*#__PURE__*/ _jsxDEV("svg", {
                    className: className,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                        /*#__PURE__*/ _jsxDEV("rect", {
                            width: "8",
                            height: "4",
                            x: "8",
                            y: "2",
                            rx: "1",
                            ry: "1"
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 50,
                            columnNumber: 263
                        }, this),
                        /*#__PURE__*/ _jsxDEV("path", {
                            d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 50,
                            columnNumber: 317
                        }, this),
                        /*#__PURE__*/ _jsxDEV("path", {
                            d: "m9 14 2 2 4-4"
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 50,
                            columnNumber: 401
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/app/code/client/App.tsx",
                    lineNumber: 50,
                    columnNumber: 63
                }, this),
            MapPin: ({ className })=>/*#__PURE__*/ _jsxDEV("svg", {
                    className: className,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                        /*#__PURE__*/ _jsxDEV("path", {
                            d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 51,
                            columnNumber: 255
                        }, this),
                        /*#__PURE__*/ _jsxDEV("circle", {
                            cx: "12",
                            cy: "10",
                            r: "3"
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 51,
                            columnNumber: 313
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/app/code/client/App.tsx",
                    lineNumber: 51,
                    columnNumber: 55
                }, this),
            Phone: ({ className })=>/*#__PURE__*/ _jsxDEV("svg", {
                    className: className,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: /*#__PURE__*/ _jsxDEV("path", {
                        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                    }, void 0, false, {
                        fileName: "/app/code/client/App.tsx",
                        lineNumber: 52,
                        columnNumber: 254
                    }, this)
                }, void 0, false, {
                    fileName: "/app/code/client/App.tsx",
                    lineNumber: 52,
                    columnNumber: 54
                }, this)
        }), []);
    const SvgComponent = SvgMap[name];
    if (!SvgComponent) return null;
    return /*#__PURE__*/ _jsxDEV(SvgComponent, {
        className: className
    }, void 0, false, {
        fileName: "/app/code/client/App.tsx",
        lineNumber: 57,
        columnNumber: 10
    }, this);
};
_s(Icon, "FI+5JHoytasS61ym8BoOKr7gby8=");
_c = Icon;
const NavLink = ({ page, currentPage, setCurrentPage, isMobile = false })=>{
    const isActive = currentPage === page;
    const baseClasses = isMobile ? "block w-full text-left px-4 py-3 text-lg font-medium border-l-4" : "relative px-4 py-2 font-semibold transition-colors duration-200 before:absolute before:inset-x-0 before:bottom-0 before:h-1 before:rounded-t";
    const activeClasses = isMobile ? `bg-gray-100 text-blue-900 border-amber-500` : `text-amber-500 before:bg-amber-500`;
    const inactiveClasses = isMobile ? `text-gray-700 border-transparent hover:bg-gray-50` : `text-white hover:text-amber-500/80 before:bg-transparent hover:before:bg-amber-500/50`;
    const iconName = {
        [PAGES.HOME]: 'Home',
        [PAGES.ABOUT]: 'Users',
        [PAGES.ACADEMICS]: 'BookOpen',
        [PAGES.ADMISSIONS]: 'ClipboardCheck',
        [PAGES.NEWS]: 'Calendar',
        [PAGES.GALLERY]: 'Image',
        [PAGES.CONTACT]: 'Mail'
    }[page];
    return /*#__PURE__*/ _jsxDEV("button", {
        onClick: ()=>setCurrentPage(page),
        className: `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`,
        children: [
            isMobile && /*#__PURE__*/ _jsxDEV(Icon, {
                name: iconName || 'Home',
                className: "inline w-5 h-5 mr-3"
            }, void 0, false, {
                fileName: "/app/code/client/App.tsx",
                lineNumber: 97,
                columnNumber: 20
            }, this),
            page
        ]
    }, void 0, true, {
        fileName: "/app/code/client/App.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
};
_c1 = NavLink;
const Header = ({ currentPage, setCurrentPage, setIsPortalOpen })=>{
    _s1();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(()=>{
        setIsMenuOpen(false);
    }, [
        currentPage
    ]);
    const navItems = Object.values(PAGES);
    return /*#__PURE__*/ _jsxDEV("header", {
        className: `sticky top-0 z-50 bg-${PRIMARY_COLOR} shadow-lg`,
        children: [
            /*#__PURE__*/ _jsxDEV("div", {
                className: "container mx-auto px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    className: "flex items-center justify-between h-20",
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            className: "flex-shrink-0",
                            children: /*#__PURE__*/ _jsxDEV("button", {
                                onClick: ()=>setCurrentPage(PAGES.HOME),
                                className: "flex items-center space-x-3",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: `w-8 h-8 rounded-full bg-${ACCENT_COLOR} flex items-center justify-center text-${PRIMARY_COLOR} font-black text-xl`,
                                        children: "T"
                                    }, void 0, false, {
                                        fileName: "/app/code/client/App.tsx",
                                        lineNumber: 125,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("span", {
                                        className: "text-xl font-extrabold text-white tracking-tight hidden sm:inline",
                                        children: SCHOOL_NAME
                                    }, void 0, false, {
                                        fileName: "/app/code/client/App.tsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("span", {
                                        className: "text-xl font-extrabold text-white tracking-tight sm:hidden",
                                        children: "Kiyumba TSS"
                                    }, void 0, false, {
                                        fileName: "/app/code/client/App.tsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/app/code/client/App.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("nav", {
                            className: "hidden lg:flex lg:space-x-1",
                            children: navItems.map((page)=>/*#__PURE__*/ _jsxDEV(NavLink, {
                                    page: page,
                                    currentPage: currentPage,
                                    setCurrentPage: setCurrentPage
                                }, page, false, {
                                    fileName: "/app/code/client/App.tsx",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            className: "flex items-center space-x-3",
                            children: [
                                /*#__PURE__*/ _jsxDEV("button", {
                                    onClick: ()=>setIsPortalOpen(true),
                                    className: `hidden sm:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-${PRIMARY_COLOR} bg-${ACCENT_COLOR} hover:bg-amber-600 transition duration-150 shadow-md`,
                                    children: [
                                        /*#__PURE__*/ _jsxDEV(Icon, {
                                            name: "LogIn",
                                            className: "w-5 h-5 mr-2"
                                        }, void 0, false, {
                                            fileName: "/app/code/client/App.tsx",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, this),
                                        "Portal Login"
                                    ]
                                }, void 0, true, {
                                    fileName: "/app/code/client/App.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("button", {
                                    className: "lg:hidden text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white",
                                    onClick: ()=>setIsMenuOpen(!isMenuOpen),
                                    children: isMenuOpen ? /*#__PURE__*/ _jsxDEV(Icon, {
                                        name: "X",
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "/app/code/client/App.tsx",
                                        lineNumber: 154,
                                        columnNumber: 29
                                    }, this) : /*#__PURE__*/ _jsxDEV(Icon, {
                                        name: "Menu",
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "/app/code/client/App.tsx",
                                        lineNumber: 154,
                                        columnNumber: 69
                                    }, this)
                                }, void 0, false, {
                                    fileName: "/app/code/client/App.tsx",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 142,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/app/code/client/App.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/app/code/client/App.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            isMenuOpen && /*#__PURE__*/ _jsxDEV("div", {
                className: "lg:hidden bg-white shadow-xl border-t border-gray-200 absolute w-full",
                children: [
                    navItems.map((page)=>/*#__PURE__*/ _jsxDEV(NavLink, {
                            page: page,
                            currentPage: currentPage,
                            setCurrentPage: setCurrentPage,
                            isMobile: true
                        }, page, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 163,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ _jsxDEV("button", {
                        onClick: ()=>setIsPortalOpen(true),
                        className: `w-full text-left px-4 py-3 text-lg font-medium text-${PRIMARY_COLOR} bg-amber-500/10 hover:bg-amber-500/20 flex items-center`,
                        children: [
                            /*#__PURE__*/ _jsxDEV(Icon, {
                                name: "LogIn",
                                className: "w-5 h-5 mr-3"
                            }, void 0, false, {
                                fileName: "/app/code/client/App.tsx",
                                lineNumber: 175,
                                columnNumber: 13
                            }, this),
                            "Portal Login"
                        ]
                    }, void 0, true, {
                        fileName: "/app/code/client/App.tsx",
                        lineNumber: 171,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/app/code/client/App.tsx",
                lineNumber: 161,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "/app/code/client/App.tsx",
        lineNumber: 120,
        columnNumber: 5
    }, this);
};
_s1(Header, "wSShVbDU3nvMgCOG3Tb8LxwMgA0=");
_c2 = Header;
const Footer = ({ setCurrentPage })=>/*#__PURE__*/ _jsxDEV("footer", {
        className: `bg-gray-800 text-white mt-12`,
        children: /*#__PURE__*/ _jsxDEV("div", {
            className: "container mx-auto p-8 lg:p-12",
            children: [
                /*#__PURE__*/ _jsxDEV("div", {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8 mb-8",
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            children: [
                                /*#__PURE__*/ _jsxDEV("h5", {
                                    className: `text-xl font-bold mb-4 text-${ACCENT_COLOR}`,
                                    children: SCHOOL_NAME
                                }, void 0, false, {
                                    fileName: "/app/code/client/App.tsx",
                                    lineNumber: 194,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    className: "text-sm text-gray-400",
                                    children: "P.O. Box 1234, Kiyumba, UG"
                                }, void 0, false, {
                                    fileName: "/app/code/client/App.tsx",
                                    lineNumber: 195,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    className: "text-sm text-gray-400 mt-1",
                                    children: "Email: info@kiyumba-tss.edu"
                                }, void 0, false, {
                                    fileName: "/app/code/client/App.tsx",
                                    lineNumber: 196,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    className: "text-sm text-gray-400 mt-1",
                                    children: "Phone: +256 (0) 777 123 456"
                                }, void 0, false, {
                                    fileName: "/app/code/client/App.tsx",
                                    lineNumber: 197,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 193,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            children: [
                                /*#__PURE__*/ _jsxDEV("h5", {
                                    className: "text-lg font-semibold mb-4",
                                    children: "Quick Links"
                                }, void 0, false, {
                                    fileName: "/app/code/client/App.tsx",
                                    lineNumber: 201,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ _jsxDEV("ul", {
                                    className: "space-y-2",
                                    children: [
                                        PAGES.HOME,
                                        PAGES.ACADEMICS,
                                        PAGES.ADMISSIONS,
                                        PAGES.CONTACT
                                    ].map((page)=>/*#__PURE__*/ _jsxDEV("li", {
                                            children: /*#__PURE__*/ _jsxDEV("button", {
                                                onClick: ()=>setCurrentPage(page),
                                                className: "text-gray-400 hover:text-white transition-colors text-sm",
                                                children: page
                                            }, void 0, false, {
                                                fileName: "/app/code/client/App.tsx",
                                                lineNumber: 205,
                                                columnNumber: 17
                                            }, this)
                                        }, page, false, {
                                            fileName: "/app/code/client/App.tsx",
                                            lineNumber: 204,
                                            columnNumber: 15
                                        }, this))
                                }, void 0, false, {
                                    fileName: "/app/code/client/App.tsx",
                                    lineNumber: 202,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 200,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            children: [
                                /*#__PURE__*/ _jsxDEV("h5", {
                                    className: "text-lg font-semibold mb-4",
                                    children: "Resources"
                                }, void 0, false, {
                                    fileName: "/app/code/client/App.tsx",
                                    lineNumber: 217,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ _jsxDEV("ul", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("li", {
                                            children: /*#__PURE__*/ _jsxDEV("a", {
                                                href: "#",
                                                className: "text-gray-400 hover:text-white transition-colors text-sm",
                                                children: "Student Handbook"
                                            }, void 0, false, {
                                                fileName: "/app/code/client/App.tsx",
                                                lineNumber: 219,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/app/code/client/App.tsx",
                                            lineNumber: 219,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("li", {
                                            children: /*#__PURE__*/ _jsxDEV("a", {
                                                href: "#",
                                                className: "text-gray-400 hover:text-white transition-colors text-sm",
                                                children: "Library Services"
                                            }, void 0, false, {
                                                fileName: "/app/code/client/App.tsx",
                                                lineNumber: 220,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/app/code/client/App.tsx",
                                            lineNumber: 220,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("li", {
                                            children: /*#__PURE__*/ _jsxDEV("a", {
                                                href: "#",
                                                className: "text-gray-400 hover:text-white transition-colors text-sm",
                                                children: "Career Guidance"
                                            }, void 0, false, {
                                                fileName: "/app/code/client/App.tsx",
                                                lineNumber: 221,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/app/code/client/App.tsx",
                                            lineNumber: 221,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/app/code/client/App.tsx",
                                    lineNumber: 218,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 216,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            children: [
                                /*#__PURE__*/ _jsxDEV("h5", {
                                    className: "text-lg font-semibold mb-4",
                                    children: "Connect"
                                }, void 0, false, {
                                    fileName: "/app/code/client/App.tsx",
                                    lineNumber: 226,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    className: "flex space-x-4",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("a", {
                                            href: "#",
                                            className: `text-gray-400 hover:text-amber-500`,
                                            "aria-label": "Facebook",
                                            children: /*#__PURE__*/ _jsxDEV("svg", {
                                                className: "w-6 h-6",
                                                viewBox: "0 0 24 24",
                                                fill: "currentColor",
                                                children: /*#__PURE__*/ _jsxDEV("path", {
                                                    d: "M14 11h-2v-3h2v3zm4 0h-2v-3h2v3zm-4 4h-2v-3h2v3zm4 0h-2v-3h2v3zm0-8h-4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                                                }, void 0, false, {
                                                    fileName: "/app/code/client/App.tsx",
                                                    lineNumber: 229,
                                                    columnNumber: 80
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "/app/code/client/App.tsx",
                                                lineNumber: 229,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/app/code/client/App.tsx",
                                            lineNumber: 228,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("a", {
                                            href: "#",
                                            className: `text-gray-400 hover:text-amber-500`,
                                            "aria-label": "Twitter",
                                            children: /*#__PURE__*/ _jsxDEV("svg", {
                                                className: "w-6 h-6",
                                                viewBox: "0 0 24 24",
                                                fill: "currentColor",
                                                children: /*#__PURE__*/ _jsxDEV("path", {
                                                    d: "M22.46 6c-.8.44-1.66.73-2.58.85.91-.54 1.6-1.4 1.93-2.4-.85.5-1.79.87-2.79 1.07C18.67 4.7 17.56 4 16.32 4c-2.4 0-4.35 1.95-4.35 4.35 0 .34.04.67.11.99-3.62-.18-6.83-1.92-8.98-4.52-.37.64-.58 1.4-.58 2.2 0 1.51.77 2.85 1.94 3.63-.7-.02-1.35-.21-1.92-.53v.05c0 2.1 1.5 3.85 3.49 4.24-.36.1-.73.15-1.11.15-.27 0-.53-.02-.79-.08.55 1.73 2.15 3 4.05 3.04-1.49 1.17-3.37 1.87-5.4 1.87-.35 0-.69-.02-1.02-.06 1.94 1.25 4.25 2 6.75 2 8.1 0 12.55-6.7 12.55-12.55 0-.2-.01-.4-.02-.6.86-.62 1.6-1.38 2.19-2.27z"
                                                }, void 0, false, {
                                                    fileName: "/app/code/client/App.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 80
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "/app/code/client/App.tsx",
                                                lineNumber: 232,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/app/code/client/App.tsx",
                                            lineNumber: 231,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/app/code/client/App.tsx",
                                    lineNumber: 227,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 225,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/app/code/client/App.tsx",
                    lineNumber: 192,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ _jsxDEV("div", {
                    className: "text-center text-sm text-gray-400 pt-4",
                    children: [
                        "© ",
                        new Date().getFullYear(),
                        " ",
                        SCHOOL_NAME,
                        ". All rights reserved."
                    ]
                }, void 0, true, {
                    fileName: "/app/code/client/App.tsx",
                    lineNumber: 238,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "/app/code/client/App.tsx",
            lineNumber: 191,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "/app/code/client/App.tsx",
        lineNumber: 190,
        columnNumber: 3
    }, this);
_c3 = Footer;
// === Page Components ===
const HeroSection = ({ setCurrentPage })=>/*#__PURE__*/ _jsxDEV("div", {
        className: `relative bg-blue-900 overflow-hidden shadow-xl`,
        children: [
            /*#__PURE__*/ _jsxDEV("div", {
                className: "absolute inset-0 opacity-20 bg-[url('https://placehold.co/1200x800/2563EB/ffffff?text=Kiyumba+TSS+Campus')] bg-cover bg-center"
            }, void 0, false, {
                fileName: "/app/code/client/App.tsx",
                lineNumber: 249,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ _jsxDEV("div", {
                className: "relative container mx-auto px-4 py-16 sm:py-24 lg:py-32 text-center",
                children: [
                    /*#__PURE__*/ _jsxDEV("h1", {
                        className: "text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-4",
                        children: SCHOOL_NAME
                    }, void 0, false, {
                        fileName: "/app/code/client/App.tsx",
                        lineNumber: 252,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ _jsxDEV("p", {
                        className: `text-xl sm:text-2xl text-amber-500 font-medium mb-8`,
                        children: TAGLINE
                    }, void 0, false, {
                        fileName: "/app/code/client/App.tsx",
                        lineNumber: 255,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6",
                        children: [
                            /*#__PURE__*/ _jsxDEV("button", {
                                onClick: ()=>setCurrentPage(PAGES.ADMISSIONS),
                                className: `px-8 py-3 text-lg font-bold rounded-xl text-blue-900 bg-amber-500 hover:bg-amber-600 transition duration-300 transform hover:scale-[1.02] shadow-lg`,
                                children: [
                                    "Apply Now ",
                                    /*#__PURE__*/ _jsxDEV(Icon, {
                                        name: "ClipboardCheck",
                                        className: "inline w-5 h-5 ml-2"
                                    }, void 0, false, {
                                        fileName: "/app/code/client/App.tsx",
                                        lineNumber: 264,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/app/code/client/App.tsx",
                                lineNumber: 260,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ _jsxDEV("button", {
                                onClick: ()=>setCurrentPage(PAGES.ACADEMICS),
                                className: "px-8 py-3 text-lg font-bold rounded-xl text-white border-2 border-white hover:bg-white hover:text-blue-900 transition duration-300 transform hover:scale-[1.02] shadow-lg",
                                children: "Explore Academics"
                            }, void 0, false, {
                                fileName: "/app/code/client/App.tsx",
                                lineNumber: 266,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/app/code/client/App.tsx",
                        lineNumber: 259,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/app/code/client/App.tsx",
                lineNumber: 251,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "/app/code/client/App.tsx",
        lineNumber: 248,
        columnNumber: 3
    }, this);
_c4 = HeroSection;
const QuickLinks = ({ setCurrentPage })=>/*#__PURE__*/ _jsxDEV("div", {
        className: "container mx-auto px-4 mt-[-4rem] relative z-20",
        children: /*#__PURE__*/ _jsxDEV("div", {
            className: `grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-xl bg-white shadow-2xl border-t-4 border-amber-500`,
            children: [
                /*#__PURE__*/ _jsxDEV(LinkCard, {
                    icon: "BookOpen",
                    title: "Student Resources",
                    description: "Access timetables, assignments, and digital library.",
                    onClick: ()=>setCurrentPage(PAGES.ACADEMICS)
                }, void 0, false, {
                    fileName: "/app/code/client/App.tsx",
                    lineNumber: 280,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ _jsxDEV(LinkCard, {
                    icon: "Users",
                    title: "Teacher Portal",
                    description: "Manage classes, submit grades, and access teaching materials.",
                    onClick: ()=>alert("Portal login required!")
                }, void 0, false, {
                    fileName: "/app/code/client/App.tsx",
                    lineNumber: 286,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ _jsxDEV(LinkCard, {
                    icon: "Calendar",
                    title: "Events & Calendar",
                    description: "See upcoming school events and academic dates.",
                    onClick: ()=>setCurrentPage(PAGES.NEWS)
                }, void 0, false, {
                    fileName: "/app/code/client/App.tsx",
                    lineNumber: 292,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "/app/code/client/App.tsx",
            lineNumber: 279,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "/app/code/client/App.tsx",
        lineNumber: 278,
        columnNumber: 3
    }, this);
_c5 = QuickLinks;
const LinkCard = ({ icon, title, description, onClick })=>/*#__PURE__*/ _jsxDEV("button", {
        onClick: onClick,
        className: `p-6 bg-gray-50 rounded-lg text-left shadow-lg hover:shadow-xl hover:ring-2 hover:ring-amber-500 transition duration-300 w-full flex flex-col`,
        children: [
            /*#__PURE__*/ _jsxDEV(Icon, {
                name: icon,
                className: `w-8 h-8 mb-3 text-blue-900`
            }, void 0, false, {
                fileName: "/app/code/client/App.tsx",
                lineNumber: 314,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ _jsxDEV("h3", {
                className: "text-xl font-bold mb-1 text-gray-800",
                children: title
            }, void 0, false, {
                fileName: "/app/code/client/App.tsx",
                lineNumber: 315,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ _jsxDEV("p", {
                className: "text-sm text-gray-600",
                children: description
            }, void 0, false, {
                fileName: "/app/code/client/App.tsx",
                lineNumber: 316,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "/app/code/client/App.tsx",
        lineNumber: 310,
        columnNumber: 3
    }, this);
_c6 = LinkCard;
const NewsHighlights = ({ setCurrentPage })=>/*#__PURE__*/ _jsxDEV("section", {
        className: "container mx-auto px-4 py-16",
        children: [
            /*#__PURE__*/ _jsxDEV("h2", {
                className: `text-4xl font-extrabold text-blue-900 mb-8 border-b-4 border-amber-500 pb-2 inline-block`,
                children: "Latest School News"
            }, void 0, false, {
                fileName: "/app/code/client/App.tsx",
                lineNumber: 322,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ _jsxDEV("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                children: DUMMY_NEWS.map((news)=>/*#__PURE__*/ _jsxDEV("article", {
                        className: "bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border-t-4 border-gray-100 hover:border-amber-500",
                        children: [
                            /*#__PURE__*/ _jsxDEV("p", {
                                className: "text-sm text-gray-500 mb-2",
                                children: news.date
                            }, void 0, false, {
                                fileName: "/app/code/client/App.tsx",
                                lineNumber: 326,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV("h3", {
                                className: `text-xl font-bold text-blue-900 mb-3`,
                                children: news.title
                            }, void 0, false, {
                                fileName: "/app/code/client/App.tsx",
                                lineNumber: 327,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV("p", {
                                className: "text-gray-700 text-base mb-4",
                                children: news.summary
                            }, void 0, false, {
                                fileName: "/app/code/client/App.tsx",
                                lineNumber: 328,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV("button", {
                                onClick: ()=>setCurrentPage(PAGES.NEWS),
                                className: `text-blue-900 font-semibold hover:text-amber-500 transition-colors flex items-center`,
                                children: [
                                    "Read More",
                                    /*#__PURE__*/ _jsxDEV("svg", {
                                        className: "w-4 h-4 ml-1",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ _jsxDEV("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M17.5 8.5l-5 5-5-5"
                                        }, void 0, false, {
                                            fileName: "/app/code/client/App.tsx",
                                            lineNumber: 334,
                                            columnNumber: 97
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/app/code/client/App.tsx",
                                        lineNumber: 334,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/app/code/client/App.tsx",
                                lineNumber: 329,
                                columnNumber: 11
                            }, this)
                        ]
                    }, news.id, true, {
                        fileName: "/app/code/client/App.tsx",
                        lineNumber: 325,
                        columnNumber: 9
                    }, this))
            }, void 0, false, {
                fileName: "/app/code/client/App.tsx",
                lineNumber: 323,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "/app/code/client/App.tsx",
        lineNumber: 321,
        columnNumber: 3
    }, this);
_c7 = NewsHighlights;
const HomePage = ({ setCurrentPage })=>/*#__PURE__*/ _jsxDEV("main", {
        className: "min-h-screen",
        children: [
            /*#__PURE__*/ _jsxDEV(HeroSection, {
                setCurrentPage: setCurrentPage
            }, void 0, false, {
                fileName: "/app/code/client/App.tsx",
                lineNumber: 344,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ _jsxDEV(QuickLinks, {
                setCurrentPage: setCurrentPage
            }, void 0, false, {
                fileName: "/app/code/client/App.tsx",
                lineNumber: 345,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ _jsxDEV(NewsHighlights, {
                setCurrentPage: setCurrentPage
            }, void 0, false, {
                fileName: "/app/code/client/App.tsx",
                lineNumber: 346,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                className: `bg-blue-900/5 py-16`,
                children: /*#__PURE__*/ _jsxDEV("div", {
                    className: "container mx-auto px-4 text-center",
                    children: [
                        /*#__PURE__*/ _jsxDEV("h2", {
                            className: `text-3xl sm:text-4xl font-extrabold text-blue-900 mb-4`,
                            children: "Technical Skills for a Modern Future"
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 350,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ _jsxDEV("p", {
                            className: "text-lg text-gray-700 max-w-3xl mx-auto mb-8",
                            children: "Kiyumba TSS combines rigorous academic standards with hands-on technical training, preparing students to be leaders and innovators in a rapidly evolving global economy."
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 353,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ _jsxDEV("button", {
                            onClick: ()=>setCurrentPage(PAGES.ABOUT),
                            className: `px-6 py-3 font-semibold rounded-full text-white bg-blue-900 hover:bg-blue-900/90 transition duration-300 shadow-md`,
                            children: "Discover Our Mission"
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 356,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/app/code/client/App.tsx",
                    lineNumber: 349,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "/app/code/client/App.tsx",
                lineNumber: 348,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "/app/code/client/App.tsx",
        lineNumber: 343,
        columnNumber: 3
    }, this);
_c8 = HomePage;
const PageLayout = ({ title, children })=>/*#__PURE__*/ _jsxDEV("main", {
        className: "container mx-auto px-4 py-12 min-h-[80vh]",
        children: [
            /*#__PURE__*/ _jsxDEV("h1", {
                className: `text-4xl font-extrabold text-blue-900 mb-4 border-b-4 border-amber-500 pb-2`,
                children: title
            }, void 0, false, {
                fileName: "/app/code/client/App.tsx",
                lineNumber: 374,
                columnNumber: 5
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "/app/code/client/App.tsx",
        lineNumber: 373,
        columnNumber: 3
    }, this);
_c9 = PageLayout;
const AboutPage = ()=>/*#__PURE__*/ _jsxDEV(PageLayout, {
        title: PAGES.ABOUT,
        children: [
            /*#__PURE__*/ _jsxDEV("section", {
                className: "mb-10",
                children: [
                    /*#__PURE__*/ _jsxDEV("h2", {
                        className: "text-2xl font-bold text-gray-800 mb-3",
                        children: "Our Mission & Vision"
                    }, void 0, false, {
                        fileName: "/app/code/client/App.tsx",
                        lineNumber: 382,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ _jsxDEV("p", {
                        className: "text-gray-600 mb-4",
                        children: [
                            /*#__PURE__*/ _jsxDEV("strong", {
                                children: "Mission:"
                            }, void 0, false, {
                                fileName: "/app/code/client/App.tsx",
                                lineNumber: 384,
                                columnNumber: 9
                            }, this),
                            " To provide a holistic technical and academic education that empowers students with critical thinking, practical skills, and a strong sense of community responsibility."
                        ]
                    }, void 0, true, {
                        fileName: "/app/code/client/App.tsx",
                        lineNumber: 383,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ _jsxDEV("p", {
                        className: "text-gray-600",
                        children: [
                            /*#__PURE__*/ _jsxDEV("strong", {
                                children: "Vision:"
                            }, void 0, false, {
                                fileName: "/app/code/client/App.tsx",
                                lineNumber: 387,
                                columnNumber: 9
                            }, this),
                            " To be the leading secondary technical institution in the region, recognized for excellence in innovation, character development, and student success."
                        ]
                    }, void 0, true, {
                        fileName: "/app/code/client/App.tsx",
                        lineNumber: 386,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/app/code/client/App.tsx",
                lineNumber: 381,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                className: "mb-10",
                children: [
                    /*#__PURE__*/ _jsxDEV("h2", {
                        className: "text-2xl font-bold text-gray-800 mb-3",
                        children: "Principal's Message"
                    }, void 0, false, {
                        fileName: "/app/code/client/App.tsx",
                        lineNumber: 392,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "bg-gray-50 p-6 rounded-lg shadow-inner border-l-4 border-amber-500",
                        children: [
                            /*#__PURE__*/ _jsxDEV("p", {
                                className: "italic text-gray-700",
                                children: '"Welcome to Kiyumba TSS! We are dedicated to providing an environment where every student can harness their technical aptitude and achieve their full potential. Our focus remains on preparing resourceful, disciplined, and globally competitive graduates."'
                            }, void 0, false, {
                                fileName: "/app/code/client/App.tsx",
                                lineNumber: 394,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ _jsxDEV("p", {
                                className: `mt-4 font-semibold text-right text-blue-900`,
                                children: "— Dr. Lwasa Kate, Principal"
                            }, void 0, false, {
                                fileName: "/app/code/client/App.tsx",
                                lineNumber: 397,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/app/code/client/App.tsx",
                        lineNumber: 393,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/app/code/client/App.tsx",
                lineNumber: 391,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                children: [
                    /*#__PURE__*/ _jsxDEV("h2", {
                        className: "text-2xl font-bold text-gray-800 mb-5",
                        children: "Our Esteemed Faculty"
                    }, void 0, false, {
                        fileName: "/app/code/client/App.tsx",
                        lineNumber: 402,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                        children: DUMMY_FACULTY.map((person, index)=>/*#__PURE__*/ _jsxDEV("div", {
                                className: "bg-white p-5 rounded-lg shadow-lg text-center border-t-2 border-blue-900",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "w-20 h-20 mx-auto rounded-full bg-gray-200 mb-3 flex items-center justify-center text-gray-500 font-bold text-3xl overflow-hidden",
                                        children: /*#__PURE__*/ _jsxDEV(Icon, {
                                            name: "Users",
                                            className: "w-10 h-10"
                                        }, void 0, false, {
                                            fileName: "/app/code/client/App.tsx",
                                            lineNumber: 407,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/app/code/client/App.tsx",
                                        lineNumber: 406,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("h3", {
                                        className: "text-xl font-bold text-gray-800",
                                        children: person.name
                                    }, void 0, false, {
                                        fileName: "/app/code/client/App.tsx",
                                        lineNumber: 409,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        className: `text-amber-500 font-medium`,
                                        children: person.role
                                    }, void 0, false, {
                                        fileName: "/app/code/client/App.tsx",
                                        lineNumber: 410,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        className: "text-sm text-gray-500 mt-1",
                                        children: person.specialty
                                    }, void 0, false, {
                                        fileName: "/app/code/client/App.tsx",
                                        lineNumber: 411,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "/app/code/client/App.tsx",
                                lineNumber: 405,
                                columnNumber: 11
                            }, this))
                    }, void 0, false, {
                        fileName: "/app/code/client/App.tsx",
                        lineNumber: 403,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/app/code/client/App.tsx",
                lineNumber: 401,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "/app/code/client/App.tsx",
        lineNumber: 380,
        columnNumber: 3
    }, this);
_c10 = AboutPage;
const AcademicsPage = ()=>/*#__PURE__*/ _jsxDEV(PageLayout, {
        title: PAGES.ACADEMICS,
        children: [
            /*#__PURE__*/ _jsxDEV("section", {
                className: "grid md:grid-cols-2 gap-10",
                children: [
                    /*#__PURE__*/ _jsxDEV("div", {
                        children: [
                            /*#__PURE__*/ _jsxDEV("h2", {
                                className: "text-2xl font-bold text-gray-800 mb-4",
                                children: "Core Technical Departments"
                            }, void 0, false, {
                                fileName: "/app/code/client/App.tsx",
                                lineNumber: 423,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ _jsxDEV("ul", {
                                className: "space-y-3 list-disc pl-5 text-gray-700",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("li", {
                                        children: "Automotive Technology & Mechanics"
                                    }, void 0, false, {
                                        fileName: "/app/code/client/App.tsx",
                                        lineNumber: 425,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("li", {
                                        children: "Electrical & Electronics Engineering"
                                    }, void 0, false, {
                                        fileName: "/app/code/client/App.tsx",
                                        lineNumber: 426,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("li", {
                                        children: "Building & Construction Technology"
                                    }, void 0, false, {
                                        fileName: "/app/code/client/App.tsx",
                                        lineNumber: 427,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("li", {
                                        children: "ICT and Computer Science"
                                    }, void 0, false, {
                                        fileName: "/app/code/client/App.tsx",
                                        lineNumber: 428,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("li", {
                                        children: "Metal Fabrication & Welding"
                                    }, void 0, false, {
                                        fileName: "/app/code/client/App.tsx",
                                        lineNumber: 429,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/app/code/client/App.tsx",
                                lineNumber: 424,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/app/code/client/App.tsx",
                        lineNumber: 422,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        children: [
                            /*#__PURE__*/ _jsxDEV("h2", {
                                className: "text-2xl font-bold text-gray-800 mb-4",
                                children: "Academic Programs"
                            }, void 0, false, {
                                fileName: "/app/code/client/App.tsx",
                                lineNumber: 433,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "p-4 bg-gray-50 rounded-lg shadow-sm",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("h3", {
                                                className: "font-semibold text-lg text-blue-900",
                                                children: "Lower Secondary (S1 - S2)"
                                            }, void 0, false, {
                                                fileName: "/app/code/client/App.tsx",
                                                lineNumber: 436,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("p", {
                                                className: "text-sm text-gray-600",
                                                children: "Integrated curriculum focusing on foundation sciences and technical orientation."
                                            }, void 0, false, {
                                                fileName: "/app/code/client/App.tsx",
                                                lineNumber: 437,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/app/code/client/App.tsx",
                                        lineNumber: 435,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "p-4 bg-gray-50 rounded-lg shadow-sm",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("h3", {
                                                className: "font-semibold text-lg text-blue-900",
                                                children: "Upper Secondary (S3 - S6)"
                                            }, void 0, false, {
                                                fileName: "/app/code/client/App.tsx",
                                                lineNumber: 440,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("p", {
                                                className: "text-sm text-gray-600",
                                                children: "Specialized tracks in technical subjects combined with national exam preparation."
                                            }, void 0, false, {
                                                fileName: "/app/code/client/App.tsx",
                                                lineNumber: 441,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/app/code/client/App.tsx",
                                        lineNumber: 439,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/app/code/client/App.tsx",
                                lineNumber: 434,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/app/code/client/App.tsx",
                        lineNumber: 432,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/app/code/client/App.tsx",
                lineNumber: 421,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                className: "mt-10 p-6 bg-blue-900/10 rounded-xl shadow-lg",
                children: [
                    /*#__PURE__*/ _jsxDEV("h2", {
                        className: "text-2xl font-bold text-gray-800 mb-4",
                        children: "Resources and Downloads"
                    }, void 0, false, {
                        fileName: "/app/code/client/App.tsx",
                        lineNumber: 448,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "flex flex-wrap gap-4",
                        children: [
                            /*#__PURE__*/ _jsxDEV("button", {
                                className: `flex items-center space-x-2 px-4 py-2 rounded-lg bg-amber-500 text-blue-900 font-semibold hover:bg-amber-600 transition`,
                                children: [
                                    /*#__PURE__*/ _jsxDEV(Icon, {
                                        name: "BookOpen",
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "/app/code/client/App.tsx",
                                        lineNumber: 451,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("span", {
                                        children: "Syllabus Downloads (PDF)"
                                    }, void 0, false, {
                                        fileName: "/app/code/client/App.tsx",
                                        lineNumber: 452,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/app/code/client/App.tsx",
                                lineNumber: 450,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ _jsxDEV("button", {
                                className: `flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-700 text-white font-semibold hover:bg-gray-600 transition`,
                                children: [
                                    /*#__PURE__*/ _jsxDEV(Icon, {
                                        name: "Calendar",
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "/app/code/client/App.tsx",
                                        lineNumber: 455,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("span", {
                                        children: "Academic Calendar"
                                    }, void 0, false, {
                                        fileName: "/app/code/client/App.tsx",
                                        lineNumber: 456,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/app/code/client/App.tsx",
                                lineNumber: 454,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/app/code/client/App.tsx",
                        lineNumber: 449,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/app/code/client/App.tsx",
                lineNumber: 447,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "/app/code/client/App.tsx",
        lineNumber: 420,
        columnNumber: 3
    }, this);
_c11 = AcademicsPage;
const InputField = ({ label, type, placeholder, options })=>/*#__PURE__*/ _jsxDEV("div", {
        children: [
            /*#__PURE__*/ _jsxDEV("label", {
                className: "block text-sm font-medium text-gray-700 mb-1",
                children: label
            }, void 0, false, {
                fileName: "/app/code/client/App.tsx",
                lineNumber: 472,
                columnNumber: 5
            }, this),
            type === 'select' ? /*#__PURE__*/ _jsxDEV("select", {
                className: "w-full border border-gray-300 rounded-lg p-3 bg-white focus:ring-amber-500 focus:border-amber-500 transition",
                children: options?.map((opt)=>/*#__PURE__*/ _jsxDEV("option", {
                        value: opt,
                        children: opt
                    }, opt, false, {
                        fileName: "/app/code/client/App.tsx",
                        lineNumber: 475,
                        columnNumber: 30
                    }, this))
            }, void 0, false, {
                fileName: "/app/code/client/App.tsx",
                lineNumber: 474,
                columnNumber: 7
            }, this) : /*#__PURE__*/ _jsxDEV("input", {
                type: type,
                placeholder: placeholder,
                required: true,
                className: "w-full border border-gray-300 rounded-lg p-3 focus:ring-amber-500 focus:border-amber-500 transition"
            }, void 0, false, {
                fileName: "/app/code/client/App.tsx",
                lineNumber: 478,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/app/code/client/App.tsx",
        lineNumber: 471,
        columnNumber: 3
    }, this);
_c12 = InputField;
const RequirementItem = ({ title, details, isImportant = false })=>/*#__PURE__*/ _jsxDEV("div", {
        className: `p-4 rounded-lg ${isImportant ? `bg-amber-500/20 border-l-4 border-amber-500` : 'bg-white border-l-4 border-gray-300'}`,
        children: [
            /*#__PURE__*/ _jsxDEV("h3", {
                className: `font-semibold ${isImportant ? `text-blue-900` : 'text-gray-800'}`,
                children: title
            }, void 0, false, {
                fileName: "/app/code/client/App.tsx",
                lineNumber: 491,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ _jsxDEV("p", {
                className: "text-sm text-gray-600",
                children: details
            }, void 0, false, {
                fileName: "/app/code/client/App.tsx",
                lineNumber: 492,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "/app/code/client/App.tsx",
        lineNumber: 490,
        columnNumber: 3
    }, this);
_c13 = RequirementItem;
const AdmissionsPage = ()=>{
    _s2();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleSubmit = (e)=>{
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(()=>setIsSubmitted(false), 5000);
    };
    return /*#__PURE__*/ _jsxDEV(PageLayout, {
        title: PAGES.ADMISSIONS,
        children: /*#__PURE__*/ _jsxDEV("div", {
            className: "grid lg:grid-cols-3 gap-10",
            children: [
                /*#__PURE__*/ _jsxDEV("div", {
                    className: "lg:col-span-2",
                    children: [
                        /*#__PURE__*/ _jsxDEV("h2", {
                            className: "text-2xl font-bold text-gray-800 mb-4",
                            children: "Online Application Form"
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 509,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("form", {
                            onSubmit: handleSubmit,
                            className: "p-6 bg-white rounded-xl shadow-lg border-t-4 border-amber-500",
                            children: [
                                /*#__PURE__*/ _jsxDEV("p", {
                                    className: "mb-4 text-gray-600",
                                    children: "Please fill out the form carefully. All fields are required."
                                }, void 0, false, {
                                    fileName: "/app/code/client/App.tsx",
                                    lineNumber: 511,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    className: "grid sm:grid-cols-2 gap-4 mb-4",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV(InputField, {
                                            label: "Applicant Full Name",
                                            type: "text",
                                            placeholder: "Jane N. Doe"
                                        }, void 0, false, {
                                            fileName: "/app/code/client/App.tsx",
                                            lineNumber: 514,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV(InputField, {
                                            label: "Desired Course/Track",
                                            type: "select",
                                            options: [
                                                "Automotive",
                                                "Electrical",
                                                "ICT",
                                                "Other"
                                            ]
                                        }, void 0, false, {
                                            fileName: "/app/code/client/App.tsx",
                                            lineNumber: 515,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/app/code/client/App.tsx",
                                    lineNumber: 513,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    className: "grid sm:grid-cols-2 gap-4 mb-4",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV(InputField, {
                                            label: "Email Address",
                                            type: "email",
                                            placeholder: "jane@example.com"
                                        }, void 0, false, {
                                            fileName: "/app/code/client/App.tsx",
                                            lineNumber: 518,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV(InputField, {
                                            label: "Phone Number",
                                            type: "tel",
                                            placeholder: "+256 7xx xxx xxx"
                                        }, void 0, false, {
                                            fileName: "/app/code/client/App.tsx",
                                            lineNumber: 519,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/app/code/client/App.tsx",
                                    lineNumber: 517,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    className: "mb-6",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            htmlFor: "message",
                                            children: "Previous Education Summary"
                                        }, void 0, false, {
                                            fileName: "/app/code/client/App.tsx",
                                            lineNumber: 522,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("textarea", {
                                            id: "message",
                                            rows: 4,
                                            className: "w-full border border-gray-300 rounded-lg p-3 focus:ring-amber-500 focus:border-amber-500 transition resize-none",
                                            placeholder: "Enter school name, grades, and graduation year..."
                                        }, void 0, false, {
                                            fileName: "/app/code/client/App.tsx",
                                            lineNumber: 523,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/app/code/client/App.tsx",
                                    lineNumber: 521,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("button", {
                                    type: "submit",
                                    disabled: isSubmitted,
                                    className: `w-full px-6 py-3 font-bold rounded-lg text-white bg-blue-900 hover:bg-blue-900/90 transition duration-300 shadow-md disabled:opacity-50 flex items-center justify-center`,
                                    children: isSubmitted ? /*#__PURE__*/ _jsxDEV(_Fragment, {
                                        children: [
                                            /*#__PURE__*/ _jsxDEV(Icon, {
                                                name: "ClipboardCheck",
                                                className: "w-5 h-5 mr-2 animate-pulse"
                                            }, void 0, false, {
                                                fileName: "/app/code/client/App.tsx",
                                                lineNumber: 533,
                                                columnNumber: 19
                                            }, this),
                                            "Application Submitted!"
                                        ]
                                    }, void 0, true) : "Submit Application"
                                }, void 0, false, {
                                    fileName: "/app/code/client/App.tsx",
                                    lineNumber: 526,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 510,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/app/code/client/App.tsx",
                    lineNumber: 508,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("div", {
                    className: "lg:col-span-1",
                    children: [
                        /*#__PURE__*/ _jsxDEV("h2", {
                            className: "text-2xl font-bold text-gray-800 mb-4",
                            children: "Requirements & Deadlines"
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 544,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            className: "bg-gray-100 p-5 rounded-lg space-y-4",
                            children: [
                                /*#__PURE__*/ _jsxDEV(RequirementItem, {
                                    title: "Minimum Entry Grade",
                                    details: "C+ average required for technical streams."
                                }, void 0, false, {
                                    fileName: "/app/code/client/App.tsx",
                                    lineNumber: 546,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV(RequirementItem, {
                                    title: "Application Deadline",
                                    details: "December 15th, 2025",
                                    isImportant: true
                                }, void 0, false, {
                                    fileName: "/app/code/client/App.tsx",
                                    lineNumber: 547,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV(RequirementItem, {
                                    title: "Required Documents",
                                    details: "Copy of national ID/Birth Certificate and academic transcripts."
                                }, void 0, false, {
                                    fileName: "/app/code/client/App.tsx",
                                    lineNumber: 548,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 545,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/app/code/client/App.tsx",
                    lineNumber: 543,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/app/code/client/App.tsx",
            lineNumber: 507,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/app/code/client/App.tsx",
        lineNumber: 506,
        columnNumber: 5
    }, this);
};
_s2(AdmissionsPage, "y0UBtSRcKf2AGGJv1w8GuwACgkA=");
_c14 = AdmissionsPage;
const NewsEventsPage = ()=>/*#__PURE__*/ _jsxDEV(PageLayout, {
        title: PAGES.NEWS,
        children: /*#__PURE__*/ _jsxDEV("div", {
            className: "grid lg:grid-cols-3 gap-8",
            children: [
                /*#__PURE__*/ _jsxDEV("div", {
                    className: "lg:col-span-2 space-y-8",
                    children: [
                        /*#__PURE__*/ _jsxDEV("h2", {
                            className: "text-2xl font-bold text-gray-800",
                            children: "Latest Announcements"
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 560,
                            columnNumber: 9
                        }, this),
                        DUMMY_NEWS.map((news)=>/*#__PURE__*/ _jsxDEV("article", {
                                className: "p-6 bg-white rounded-xl shadow-md border-l-4 border-amber-500",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "flex items-center justify-between mb-2",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("span", {
                                                className: "text-sm font-medium text-gray-500",
                                                children: news.date
                                            }, void 0, false, {
                                                fileName: "/app/code/client/App.tsx",
                                                lineNumber: 564,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("span", {
                                                className: `px-3 py-1 text-xs font-semibold rounded-full bg-blue-900 text-white`,
                                                children: "News"
                                            }, void 0, false, {
                                                fileName: "/app/code/client/App.tsx",
                                                lineNumber: 565,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/app/code/client/App.tsx",
                                        lineNumber: 563,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("h3", {
                                        className: "text-xl font-bold text-gray-800 mb-3",
                                        children: news.title
                                    }, void 0, false, {
                                        fileName: "/app/code/client/App.tsx",
                                        lineNumber: 567,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        className: "text-gray-600",
                                        children: [
                                            news.summary,
                                            " Our technical achievements continue to set the standard for secondary education. This particular event highlights the synergy between classroom theory and practical application."
                                        ]
                                    }, void 0, true, {
                                        fileName: "/app/code/client/App.tsx",
                                        lineNumber: 568,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("button", {
                                        className: `mt-3 text-blue-900 font-semibold hover:text-amber-500 transition-colors`,
                                        children: "View Full Article"
                                    }, void 0, false, {
                                        fileName: "/app/code/client/App.tsx",
                                        lineNumber: 569,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, news.id, true, {
                                fileName: "/app/code/client/App.tsx",
                                lineNumber: 562,
                                columnNumber: 11
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "/app/code/client/App.tsx",
                    lineNumber: 559,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ _jsxDEV("div", {
                    className: "lg:col-span-1",
                    children: [
                        /*#__PURE__*/ _jsxDEV("h2", {
                            className: "text-2xl font-bold text-gray-800 mb-4",
                            children: "Upcoming Events Calendar"
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 574,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            className: "bg-gray-100 p-6 rounded-xl shadow-inner space-y-3",
                            children: [
                                /*#__PURE__*/ _jsxDEV("p", {
                                    className: "font-bold text-lg text-blue-900",
                                    children: "Nov 5: PTA Meeting"
                                }, void 0, false, {
                                    fileName: "/app/code/client/App.tsx",
                                    lineNumber: 576,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    className: "font-bold text-lg text-blue-900",
                                    children: "Nov 12: Inter-House Sports Gala"
                                }, void 0, false, {
                                    fileName: "/app/code/client/App.tsx",
                                    lineNumber: 577,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    className: "font-bold text-lg text-blue-900",
                                    children: "Dec 15: Application Deadline"
                                }, void 0, false, {
                                    fileName: "/app/code/client/App.tsx",
                                    lineNumber: 578,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    className: "text-sm text-gray-600 pt-2",
                                    children: "Check back regularly for updates to the school calendar."
                                }, void 0, false, {
                                    fileName: "/app/code/client/App.tsx",
                                    lineNumber: 579,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 575,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/app/code/client/App.tsx",
                    lineNumber: 573,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "/app/code/client/App.tsx",
            lineNumber: 558,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "/app/code/client/App.tsx",
        lineNumber: 557,
        columnNumber: 3
    }, this);
_c15 = NewsEventsPage;
const GalleryPage = ()=>/*#__PURE__*/ _jsxDEV(PageLayout, {
        title: PAGES.GALLERY,
        children: [
            /*#__PURE__*/ _jsxDEV("h2", {
                className: "text-2xl font-bold text-gray-800 mb-4",
                children: "Showcasing Excellence in Technical and Co-Curricular Activities"
            }, void 0, false, {
                fileName: "/app/code/client/App.tsx",
                lineNumber: 588,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ _jsxDEV("p", {
                className: "mb-8 text-gray-600",
                children: "A visual tour of our campus, student projects, sports, and key school events."
            }, void 0, false, {
                fileName: "/app/code/client/App.tsx",
                lineNumber: 589,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ _jsxDEV("div", {
                className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
                children: [
                    'Robotics Competition',
                    'Sports Day',
                    'Welding Workshop',
                    'Science Lab',
                    'Graduation Ceremony',
                    'Library Reading'
                ].map((caption, index)=>/*#__PURE__*/ _jsxDEV("div", {
                        className: "relative group overflow-hidden rounded-lg shadow-lg",
                        children: [
                            /*#__PURE__*/ _jsxDEV("img", {
                                src: `https://placehold.co/400x300/4F46E5/ffffff?text=${caption.replace(/\s/g, '+')}`,
                                alt: caption,
                                className: "w-full h-40 object-cover transition duration-300 transform group-hover:scale-105"
                            }, void 0, false, {
                                fileName: "/app/code/client/App.tsx",
                                lineNumber: 594,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: `absolute inset-0 bg-blue-900 bg-opacity-40 flex items-end opacity-0 group-hover:opacity-100 transition duration-300`,
                                children: /*#__PURE__*/ _jsxDEV("p", {
                                    className: "p-3 text-sm font-semibold text-white",
                                    children: caption
                                }, void 0, false, {
                                    fileName: "/app/code/client/App.tsx",
                                    lineNumber: 600,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "/app/code/client/App.tsx",
                                lineNumber: 599,
                                columnNumber: 11
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "/app/code/client/App.tsx",
                        lineNumber: 593,
                        columnNumber: 9
                    }, this))
            }, void 0, false, {
                fileName: "/app/code/client/App.tsx",
                lineNumber: 591,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "/app/code/client/App.tsx",
        lineNumber: 587,
        columnNumber: 3
    }, this);
_c16 = GalleryPage;
const ContactInfo = ({ icon, title, details })=>/*#__PURE__*/ _jsxDEV("div", {
        className: "flex items-start space-x-4",
        children: [
            /*#__PURE__*/ _jsxDEV(Icon, {
                name: icon,
                className: `w-6 h-6 flex-shrink-0 text-amber-500`
            }, void 0, false, {
                fileName: "/app/code/client/App.tsx",
                lineNumber: 616,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ _jsxDEV("div", {
                children: [
                    /*#__PURE__*/ _jsxDEV("h3", {
                        className: "font-semibold text-gray-800",
                        children: title
                    }, void 0, false, {
                        fileName: "/app/code/client/App.tsx",
                        lineNumber: 618,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ _jsxDEV("p", {
                        className: "text-gray-600 text-sm",
                        children: details
                    }, void 0, false, {
                        fileName: "/app/code/client/App.tsx",
                        lineNumber: 619,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/app/code/client/App.tsx",
                lineNumber: 617,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "/app/code/client/App.tsx",
        lineNumber: 615,
        columnNumber: 3
    }, this);
_c17 = ContactInfo;
const ContactPage = ()=>{
    _s3();
    const [isSent, setIsSent] = useState(false);
    const handleSubmit = (e)=>{
        e.preventDefault();
        setIsSent(true);
        setTimeout(()=>setIsSent(false), 5000);
    };
    return /*#__PURE__*/ _jsxDEV(PageLayout, {
        title: PAGES.CONTACT,
        children: /*#__PURE__*/ _jsxDEV("div", {
            className: "grid lg:grid-cols-3 gap-10",
            children: [
                /*#__PURE__*/ _jsxDEV("div", {
                    className: "lg:col-span-2",
                    children: [
                        /*#__PURE__*/ _jsxDEV("h2", {
                            className: "text-2xl font-bold text-gray-800 mb-4",
                            children: "Send Us An Inquiry"
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 637,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("form", {
                            onSubmit: handleSubmit,
                            className: "p-6 bg-white rounded-xl shadow-lg border-t-4 border-amber-500",
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    className: "grid sm:grid-cols-2 gap-4 mb-4",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV(InputField, {
                                            label: "Your Full Name",
                                            type: "text",
                                            placeholder: "John Ssekandi"
                                        }, void 0, false, {
                                            fileName: "/app/code/client/App.tsx",
                                            lineNumber: 640,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV(InputField, {
                                            label: "Email Address",
                                            type: "email",
                                            placeholder: "john@email.com"
                                        }, void 0, false, {
                                            fileName: "/app/code/client/App.tsx",
                                            lineNumber: 641,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/app/code/client/App.tsx",
                                    lineNumber: 639,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    className: "mb-4",
                                    children: /*#__PURE__*/ _jsxDEV(InputField, {
                                        label: "Subject",
                                        type: "text",
                                        placeholder: "Inquiry about admissions"
                                    }, void 0, false, {
                                        fileName: "/app/code/client/App.tsx",
                                        lineNumber: 644,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "/app/code/client/App.tsx",
                                    lineNumber: 643,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    className: "mb-6",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            htmlFor: "message",
                                            children: "Your Message"
                                        }, void 0, false, {
                                            fileName: "/app/code/client/App.tsx",
                                            lineNumber: 647,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("textarea", {
                                            id: "message",
                                            rows: 5,
                                            required: true,
                                            className: "w-full border border-gray-300 rounded-lg p-3 focus:ring-amber-500 focus:border-amber-500 transition resize-none",
                                            placeholder: "How can we assist you?"
                                        }, void 0, false, {
                                            fileName: "/app/code/client/App.tsx",
                                            lineNumber: 648,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/app/code/client/App.tsx",
                                    lineNumber: 646,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("button", {
                                    type: "submit",
                                    disabled: isSent,
                                    className: `w-full px-6 py-3 font-bold rounded-lg text-white bg-blue-900 hover:bg-blue-900/90 transition duration-300 shadow-md disabled:opacity-50 flex items-center justify-center`,
                                    children: isSent ? /*#__PURE__*/ _jsxDEV(_Fragment, {
                                        children: [
                                            /*#__PURE__*/ _jsxDEV(Icon, {
                                                name: "Mail",
                                                className: "w-5 h-5 mr-2 animate-pulse"
                                            }, void 0, false, {
                                                fileName: "/app/code/client/App.tsx",
                                                lineNumber: 658,
                                                columnNumber: 19
                                            }, this),
                                            "Message Sent Successfully!"
                                        ]
                                    }, void 0, true) : "Send Message"
                                }, void 0, false, {
                                    fileName: "/app/code/client/App.tsx",
                                    lineNumber: 651,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 638,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/app/code/client/App.tsx",
                    lineNumber: 636,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("div", {
                    className: "lg:col-span-1 space-y-6",
                    children: [
                        /*#__PURE__*/ _jsxDEV("h2", {
                            className: "text-2xl font-bold text-gray-800 mb-4",
                            children: "Get in Touch"
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 668,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV(ContactInfo, {
                            icon: "MapPin",
                            title: "Address",
                            details: "Kiyumba Hill, P.O. Box 1234, Central District, Uganda"
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 669,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV(ContactInfo, {
                            icon: "Phone",
                            title: "Phone",
                            details: "+256 (0) 777 123 456"
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 670,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV(ContactInfo, {
                            icon: "Mail",
                            title: "Email",
                            details: "info@kiyumba-tss.edu"
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 671,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            className: "h-48 w-full bg-gray-200 rounded-lg overflow-hidden shadow-lg border border-gray-300 flex items-center justify-center",
                            children: /*#__PURE__*/ _jsxDEV("p", {
                                className: "text-gray-500 font-semibold text-center p-4",
                                children: "[Google Map Placeholder]"
                            }, void 0, false, {
                                fileName: "/app/code/client/App.tsx",
                                lineNumber: 674,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "/app/code/client/App.tsx",
                            lineNumber: 673,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/app/code/client/App.tsx",
                    lineNumber: 667,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/app/code/client/App.tsx",
            lineNumber: 635,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/app/code/client/App.tsx",
        lineNumber: 634,
        columnNumber: 5
    }, this);
};
_s3(ContactPage, "sQHF39ucgGYqYnMoERh3LtegYaM=");
_c18 = ContactPage;
const PortalLogin = ({ onClose })=>{
    _s4();
    const [loginAs, setLoginAs] = useState('Student');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = (e)=>{
        e.preventDefault();
        setIsLoggedIn(true);
        setTimeout(()=>{
            console.log(`Logged in as ${loginAs}. Redirecting to dashboard...`);
            onClose();
        }, 1500);
    };
    return /*#__PURE__*/ _jsxDEV("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4",
        children: /*#__PURE__*/ _jsxDEV("div", {
            className: `bg-white rounded-xl shadow-2xl max-w-lg w-full transform transition-all overflow-hidden border-t-8 border-amber-500`,
            children: /*#__PURE__*/ _jsxDEV("div", {
                className: "p-6 sm:p-8",
                children: [
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "flex justify-between items-center mb-6",
                        children: [
                            /*#__PURE__*/ _jsxDEV("h2", {
                                className: `text-3xl font-bold text-blue-900`,
                                children: "Portal Login"
                            }, void 0, false, {
                                fileName: "/app/code/client/App.tsx",
                                lineNumber: 707,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("button", {
                                onClick: onClose,
                                className: "text-gray-400 hover:text-gray-700 transition",
                                children: /*#__PURE__*/ _jsxDEV(Icon, {
                                    name: "X",
                                    className: "w-7 h-7"
                                }, void 0, false, {
                                    fileName: "/app/code/client/App.tsx",
                                    lineNumber: 709,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "/app/code/client/App.tsx",
                                lineNumber: 708,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/app/code/client/App.tsx",
                        lineNumber: 706,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "flex mb-6 border-b border-gray-200",
                        children: [
                            'Student',
                            'Teacher'
                        ].map((role)=>/*#__PURE__*/ _jsxDEV("button", {
                                onClick: ()=>setLoginAs(role),
                                className: `px-4 py-2 font-semibold transition-colors border-b-2 ${loginAs === role ? `text-blue-900 border-amber-500` : 'text-gray-500 border-transparent hover:text-gray-700'}`,
                                children: role
                            }, role, false, {
                                fileName: "/app/code/client/App.tsx",
                                lineNumber: 715,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "/app/code/client/App.tsx",
                        lineNumber: 713,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ _jsxDEV("form", {
                        onSubmit: handleLogin,
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ _jsxDEV(InputField, {
                                label: `${loginAs} ID / Username`,
                                type: "text",
                                placeholder: `Enter your ${loginAs} ID`
                            }, void 0, false, {
                                fileName: "/app/code/client/App.tsx",
                                lineNumber: 728,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV(InputField, {
                                label: "Password",
                                type: "password",
                                placeholder: "********"
                            }, void 0, false, {
                                fileName: "/app/code/client/App.tsx",
                                lineNumber: 729,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "flex justify-between items-center text-sm",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("label", {
                                        className: "flex items-center text-gray-600",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("input", {
                                                type: "checkbox",
                                                className: `rounded text-blue-900 border-gray-300 focus:ring-amber-500`
                                            }, void 0, false, {
                                                fileName: "/app/code/client/App.tsx",
                                                lineNumber: 733,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("span", {
                                                className: "ml-2",
                                                children: "Remember Me"
                                            }, void 0, false, {
                                                fileName: "/app/code/client/App.tsx",
                                                lineNumber: 734,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/app/code/client/App.tsx",
                                        lineNumber: 732,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("a", {
                                        href: "#",
                                        className: `text-blue-900 hover:underline`,
                                        children: "Forgot Password?"
                                    }, void 0, false, {
                                        fileName: "/app/code/client/App.tsx",
                                        lineNumber: 736,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/app/code/client/App.tsx",
                                lineNumber: 731,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("button", {
                                type: "submit",
                                disabled: isLoggedIn,
                                className: `w-full px-6 py-3 font-bold rounded-lg text-white bg-blue-900 hover:bg-blue-900/90 transition duration-300 shadow-md disabled:opacity-50 flex items-center justify-center`,
                                children: isLoggedIn ? /*#__PURE__*/ _jsxDEV(_Fragment, {
                                    children: [
                                        /*#__PURE__*/ _jsxDEV(Icon, {
                                            name: "LogIn",
                                            className: "w-5 h-5 mr-2 animate-spin"
                                        }, void 0, false, {
                                            fileName: "/app/code/client/App.tsx",
                                            lineNumber: 746,
                                            columnNumber: 19
                                        }, this),
                                        "Logging In..."
                                    ]
                                }, void 0, true) : `Login as ${loginAs}`
                            }, void 0, false, {
                                fileName: "/app/code/client/App.tsx",
                                lineNumber: 739,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/app/code/client/App.tsx",
                        lineNumber: 727,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/app/code/client/App.tsx",
                lineNumber: 705,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "/app/code/client/App.tsx",
            lineNumber: 704,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/app/code/client/App.tsx",
        lineNumber: 703,
        columnNumber: 5
    }, this);
};
_s4(PortalLogin, "qAn35z1XieaB6cfJvetwgfPhsVE=");
_c19 = PortalLogin;
// === Main App Component ===
const AppComponent = ()=>{
    _s5();
    const [currentPage, setCurrentPage] = useState(PAGES.HOME);
    const [isPortalOpen, setIsPortalOpen] = useState(false);
    const renderPage = ()=>{
        switch(currentPage){
            case PAGES.ABOUT:
                return /*#__PURE__*/ _jsxDEV(AboutPage, {}, void 0, false, {
                    fileName: "/app/code/client/App.tsx",
                    lineNumber: 769,
                    columnNumber: 16
                }, this);
            case PAGES.ACADEMICS:
                return /*#__PURE__*/ _jsxDEV(AcademicsPage, {}, void 0, false, {
                    fileName: "/app/code/client/App.tsx",
                    lineNumber: 771,
                    columnNumber: 16
                }, this);
            case PAGES.ADMISSIONS:
                return /*#__PURE__*/ _jsxDEV(AdmissionsPage, {}, void 0, false, {
                    fileName: "/app/code/client/App.tsx",
                    lineNumber: 773,
                    columnNumber: 16
                }, this);
            case PAGES.NEWS:
                return /*#__PURE__*/ _jsxDEV(NewsEventsPage, {}, void 0, false, {
                    fileName: "/app/code/client/App.tsx",
                    lineNumber: 775,
                    columnNumber: 16
                }, this);
            case PAGES.GALLERY:
                return /*#__PURE__*/ _jsxDEV(GalleryPage, {}, void 0, false, {
                    fileName: "/app/code/client/App.tsx",
                    lineNumber: 777,
                    columnNumber: 16
                }, this);
            case PAGES.CONTACT:
                return /*#__PURE__*/ _jsxDEV(ContactPage, {}, void 0, false, {
                    fileName: "/app/code/client/App.tsx",
                    lineNumber: 779,
                    columnNumber: 16
                }, this);
            case PAGES.HOME:
            default:
                return /*#__PURE__*/ _jsxDEV(HomePage, {
                    setCurrentPage: setCurrentPage
                }, void 0, false, {
                    fileName: "/app/code/client/App.tsx",
                    lineNumber: 782,
                    columnNumber: 16
                }, this);
        }
    };
    return /*#__PURE__*/ _jsxDEV("div", {
        id: "app-container",
        className: "min-h-screen bg-gray-50",
        children: [
            /*#__PURE__*/ _jsxDEV("style", {
                dangerouslySetInnerHTML: {
                    __html: `
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
          .font-inter { font-family: 'Inter', sans-serif; }
      `
                }
            }, void 0, false, {
                fileName: "/app/code/client/App.tsx",
                lineNumber: 788,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV(Header, {
                currentPage: currentPage,
                setCurrentPage: setCurrentPage,
                setIsPortalOpen: setIsPortalOpen
            }, void 0, false, {
                fileName: "/app/code/client/App.tsx",
                lineNumber: 793,
                columnNumber: 7
            }, this),
            renderPage(),
            /*#__PURE__*/ _jsxDEV(Footer, {
                setCurrentPage: setCurrentPage
            }, void 0, false, {
                fileName: "/app/code/client/App.tsx",
                lineNumber: 801,
                columnNumber: 7
            }, this),
            isPortalOpen && /*#__PURE__*/ _jsxDEV(PortalLogin, {
                onClose: ()=>setIsPortalOpen(false)
            }, void 0, false, {
                fileName: "/app/code/client/App.tsx",
                lineNumber: 803,
                columnNumber: 24
            }, this)
        ]
    }, void 0, true, {
        fileName: "/app/code/client/App.tsx",
        lineNumber: 787,
        columnNumber: 5
    }, this);
};
_s5(AppComponent, "FjtT5cAgoQ87Hx/6QDHuGT7HDmQ=");
_c20 = AppComponent;
const queryClient = new QueryClient();
const App = ()=>/*#__PURE__*/ _jsxDEV(QueryClientProvider, {
        client: queryClient,
        children: /*#__PURE__*/ _jsxDEV(TooltipProvider, {
            children: [
                /*#__PURE__*/ _jsxDEV(Toaster, {}, void 0, false, {
                    fileName: "/app/code/client/App.tsx",
                    lineNumber: 813,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ _jsxDEV(Sonner, {}, void 0, false, {
                    fileName: "/app/code/client/App.tsx",
                    lineNumber: 814,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ _jsxDEV(AppComponent, {}, void 0, false, {
                    fileName: "/app/code/client/App.tsx",
                    lineNumber: 815,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "/app/code/client/App.tsx",
            lineNumber: 812,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "/app/code/client/App.tsx",
        lineNumber: 811,
        columnNumber: 3
    }, this);
_c21 = App;
createRoot(document.getElementById("root")).render(/*#__PURE__*/ _jsxDEV(App, {}, void 0, false, {
    fileName: "/app/code/client/App.tsx",
    lineNumber: 820,
    columnNumber: 53
}, this));
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21;
$RefreshReg$(_c, "Icon");
$RefreshReg$(_c1, "NavLink");
$RefreshReg$(_c2, "Header");
$RefreshReg$(_c3, "Footer");
$RefreshReg$(_c4, "HeroSection");
$RefreshReg$(_c5, "QuickLinks");
$RefreshReg$(_c6, "LinkCard");
$RefreshReg$(_c7, "NewsHighlights");
$RefreshReg$(_c8, "HomePage");
$RefreshReg$(_c9, "PageLayout");
$RefreshReg$(_c10, "AboutPage");
$RefreshReg$(_c11, "AcademicsPage");
$RefreshReg$(_c12, "InputField");
$RefreshReg$(_c13, "RequirementItem");
$RefreshReg$(_c14, "AdmissionsPage");
$RefreshReg$(_c15, "NewsEventsPage");
$RefreshReg$(_c16, "GalleryPage");
$RefreshReg$(_c17, "ContactInfo");
$RefreshReg$(_c18, "ContactPage");
$RefreshReg$(_c19, "PortalLogin");
$RefreshReg$(_c20, "AppComponent");
$RefreshReg$(_c21, "App");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/code/client/App.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/code/client/App.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFwcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9nbG9iYWwuY3NzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRvYXN0ZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3RvYXN0ZXJcIjtcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IHsgVG9hc3RlciBhcyBTb25uZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3Nvbm5lclwiO1xuaW1wb3J0IHsgVG9vbHRpcFByb3ZpZGVyIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS90b29sdGlwXCI7XG5pbXBvcnQgeyBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcblxuLy8gPT09IENvbmZpZ3VyYXRpb24gJiBEYXRhID09PVxuY29uc3QgU0NIT09MX05BTUUgPSBcIktpeXVtYmEgVGVjaG5pY2FsIFNlY29uZGFyeSBTY2hvb2xcIjtcbmNvbnN0IFRBR0xJTkUgPSBcIkZvc3RlcmluZyBJbm5vdmF0aW9uLCBOdXJ0dXJpbmcgRXhjZWxsZW5jZVwiO1xuY29uc3QgUFJJTUFSWV9DT0xPUiA9ICdibHVlLTkwMCc7XG5jb25zdCBBQ0NFTlRfQ09MT1IgPSAnYW1iZXItNTAwJztcblxuY29uc3QgUEFHRVMgPSB7XG4gIEhPTUU6ICdIb21lJyxcbiAgQUJPVVQ6ICdBYm91dCBVcycsXG4gIEFDQURFTUlDUzogJ0FjYWRlbWljcycsXG4gIEFETUlTU0lPTlM6ICdBZG1pc3Npb25zJyxcbiAgTkVXUzogJ05ld3MgJiBFdmVudHMnLFxuICBHQUxMRVJZOiAnR2FsbGVyeScsXG4gIENPTlRBQ1Q6ICdDb250YWN0Jyxcbn07XG5cbmNvbnN0IERVTU1ZX05FV1MgPSBbXG4gIHsgaWQ6IDEsIHRpdGxlOiBcIlN0dWRlbnRzIFdpbiBOYXRpb25hbCBSb2JvdGljcyBDaGFsbGVuZ2VcIiwgZGF0ZTogXCJPY3QgMjAsIDIwMjVcIiwgc3VtbWFyeTogXCJPdXIgdGVjaCBzdHVkZW50cyBzZWN1cmVkIHRoZSB0b3AgcHJpemUsIHNob3djYXNpbmcgcmVtYXJrYWJsZSBza2lsbCBpbiBhdXRvbWF0aW9uIGFuZCBkZXNpZ24uXCIgfSxcbiAgeyBpZDogMiwgdGl0bGU6IFwiQW5udWFsIFNwb3J0cyBEYXkgU3VjY2Vzc1wiLCBkYXRlOiBcIk9jdCAxNSwgMjAyNVwiLCBzdW1tYXJ5OiBcIkEgZGF5IGZpbGxlZCB3aXRoIHNwaXJpdGVkIGNvbXBldGl0aW9uLCB0ZWFtd29yaywgYW5kIGF0aGxldGljIGFjaGlldmVtZW50cyBhY3Jvc3MgYWxsIGdyYWRlIGxldmVscy5cIiB9LFxuICB7IGlkOiAzLCB0aXRsZTogXCJQcmluY2lwYWwncyBBZGRyZXNzIG9uIE5ldyBDdXJyaWN1bHVtXCIsIGRhdGU6IFwiU2VwIDI4LCAyMDI1XCIsIHN1bW1hcnk6IFwiQW4gb3V0bGluZSBvZiB0aGUgbmV3IGludGVncmF0ZWQgdGVjaG5pY2FsIGFuZCBhY2FkZW1pYyBzeWxsYWJ1cyByb2xsaW5nIG91dCBuZXh0IHRlcm0uXCIgfSxcbl07XG5cbmNvbnN0IERVTU1ZX0ZBQ1VMVFkgPSBbXG4gIHsgbmFtZTogXCJEci4gTHdhc2EgS2F0ZVwiLCByb2xlOiBcIlByaW5jaXBhbFwiLCBzcGVjaWFsdHk6IFwiRWR1Y2F0aW9uYWwgTGVhZGVyc2hpcFwiIH0sXG4gIHsgbmFtZTogXCJNci4gSm9obiBNYmFiYXppXCIsIHJvbGU6IFwiSGVhZCBvZiBUZWNobmljYWwgRGVwdC5cIiwgc3BlY2lhbHR5OiBcIk1lY2hhbmljYWwgRW5naW5lZXJpbmdcIiB9LFxuICB7IG5hbWU6IFwiTXMuIFNhcmFoIE5hbWFrdWxhXCIsIHJvbGU6IFwiSGVhZCBvZiBIdW1hbml0aWVzXCIsIHNwZWNpYWx0eTogXCJMaXRlcmF0dXJlIGFuZCBIaXN0b3J5XCIgfSxcbl07XG5cbi8vID09PSBVdGlsaXR5IEljb25zID09PVxuY29uc3QgSWNvbiA9ICh7IG5hbWUsIGNsYXNzTmFtZSA9IFwidy02IGgtNlwiIH0pID0+IHtcbiAgY29uc3QgU3ZnTWFwID0gdXNlTWVtbygoKSA9PiAoe1xuICAgIEhvbWU6ICh7IGNsYXNzTmFtZSB9OiB7IGNsYXNzTmFtZTogc3RyaW5nIH0pID0+IDxzdmcgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCI+PHBhdGggZD1cIm0zIDkgOS03IDkgN3YxMWEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMnpcIi8+PHBvbHlsaW5lIHBvaW50cz1cIjkgMjIgOSAxMiAxNSAxMiAxNSAyMlwiLz48L3N2Zz4sXG4gICAgVXNlcnM6ICh7IGNsYXNzTmFtZSB9OiB7IGNsYXNzTmFtZTogc3RyaW5nIH0pID0+IDxzdmcgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCI+PHBhdGggZD1cIk0xNiAyMXYtMmE0IDQgMCAwIDAtNC00SDZhNCA0IDAgMCAwLTQgNHYyXCIvPjxjaXJjbGUgY3g9XCI5XCIgY3k9XCI3XCIgcj1cIjRcIi8+PHBhdGggZD1cIk0yMiAyMXYtMmE0IDQgMCAwIDAtMy0zLjg3XCIvPjxwYXRoIGQ9XCJNMTYgMy4xM2E0IDQgMCAwIDEgMCA3Ljc1XCIvPjwvc3ZnPixcbiAgICBCb29rT3BlbjogKHsgY2xhc3NOYW1lIH06IHsgY2xhc3NOYW1lOiBzdHJpbmcgfSkgPT4gPHN2ZyBjbGFzc05hbWU9e2NsYXNzTmFtZX0geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIj48cGF0aCBkPVwiTTIgM2g2YTQgNCAwIDAgMSA0IDR2MTRhMyAzIDAgMCAwLTMtM0gyelwiLz48cGF0aCBkPVwiTTIyIDNoLTZhNCA0IDAgMCAwLTQgNHYxNGEzIDMgMCAwIDEgMy0zaDd6XCIvPjwvc3ZnPixcbiAgICBDbGlwYm9hcmRMaXN0OiAoeyBjbGFzc05hbWUgfTogeyBjbGFzc05hbWU6IHN0cmluZyB9KSA9PiA8c3ZnIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiPjxyZWN0IHdpZHRoPVwiOFwiIGhlaWdodD1cIjRcIiB4PVwiOFwiIHk9XCIyXCIgcng9XCIxXCIgcnk9XCIxXCIvPjxwYXRoIGQ9XCJNMTYgNGgyYTIgMiAwIDAgMSAyIDJ2MTRhMiAyIDAgMCAxLTIgMkg2YTIgMiAwIDAgMS0yLTJWNmEyIDIgMCAwIDEgMi0yaDJcIi8+PHBhdGggZD1cIk0xMiAxMWg0XCIvPjxwYXRoIGQ9XCJNMTIgMTVoNFwiLz48cGF0aCBkPVwiTTggMTFoLjAxXCIvPjxwYXRoIGQ9XCJNOCAxNWguMDFcIi8+PC9zdmc+LFxuICAgIENhbGVuZGFyOiAoeyBjbGFzc05hbWUgfTogeyBjbGFzc05hbWU6IHN0cmluZyB9KSA9PiA8c3ZnIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiPjxwYXRoIGQ9XCJNOCAydjRcIi8+PHBhdGggZD1cIk0xNiAydjRcIi8+PHJlY3Qgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgeD1cIjNcIiB5PVwiNFwiIHJ4PVwiMlwiLz48cGF0aCBkPVwiTTMgMTBoMThcIi8+PC9zdmc+LFxuICAgIEltYWdlOiAoeyBjbGFzc05hbWUgfTogeyBjbGFzc05hbWU6IHN0cmluZyB9KSA9PiA8c3ZnIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiPjxyZWN0IHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHg9XCIzXCIgeT1cIjNcIiByeD1cIjJcIiByeT1cIjJcIi8+PGNpcmNsZSBjeD1cIjlcIiBjeT1cIjlcIiByPVwiMlwiLz48cGF0aCBkPVwibTIxIDE1LTMuMDg2LTMuMDg2YTIgMiAwIDAgMC0yLjgyOCAwTDYgMjFcIi8+PC9zdmc+LFxuICAgIE1haWw6ICh7IGNsYXNzTmFtZSB9OiB7IGNsYXNzTmFtZTogc3RyaW5nIH0pID0+IDxzdmcgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCI+PHJlY3Qgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjE2XCIgeD1cIjJcIiB5PVwiNFwiIHJ4PVwiMlwiLz48cGF0aCBkPVwibTIyIDctOC45NyA1LjdhMS45NCAxLjk0IDAgMCAxLTIuMDYgMEwyIDdcIi8+PC9zdmc+LFxuICAgIExvZ0luOiAoeyBjbGFzc05hbWUgfTogeyBjbGFzc05hbWU6IHN0cmluZyB9KSA9PiA8c3ZnIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiPjxwYXRoIGQ9XCJNMTUgM2g0YTIgMiAwIDAgMSAyIDJ2MTRhMiAyIDAgMCAxLTIgMmgtNFwiLz48cG9seWxpbmUgcG9pbnRzPVwiMTAgMTcgMTUgMTIgMTAgN1wiLz48bGluZSB4MT1cIjE1XCIgeDI9XCIzXCIgeTE9XCIxMlwiIHkyPVwiMTJcIi8+PC9zdmc+LFxuICAgIE1lbnU6ICh7IGNsYXNzTmFtZSB9OiB7IGNsYXNzTmFtZTogc3RyaW5nIH0pID0+IDxzdmcgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCI+PGxpbmUgeDE9XCIzXCIgeDI9XCIyMVwiIHkxPVwiMTJcIiB5Mj1cIjEyXCIvPjxsaW5lIHgxPVwiM1wiIHgyPVwiMjFcIiB5MT1cIjZcIiB5Mj1cIjZcIi8+PGxpbmUgeDE9XCIzXCIgeDI9XCIyMVwiIHkxPVwiMThcIiB5Mj1cIjE4XCIvPjwvc3ZnPixcbiAgICBYOiAoeyBjbGFzc05hbWUgfTogeyBjbGFzc05hbWU6IHN0cmluZyB9KSA9PiA8c3ZnIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiPjxwYXRoIGQ9XCJNMTggNiA2IDE4XCIvPjxwYXRoIGQ9XCJtNiA2IDEyIDEyXCIvPjwvc3ZnPixcbiAgICBDbGlwYm9hcmRDaGVjazogKHsgY2xhc3NOYW1lIH06IHsgY2xhc3NOYW1lOiBzdHJpbmcgfSkgPT4gPHN2ZyBjbGFzc05hbWU9e2NsYXNzTmFtZX0geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIj48cmVjdCB3aWR0aD1cIjhcIiBoZWlnaHQ9XCI0XCIgeD1cIjhcIiB5PVwiMlwiIHJ4PVwiMVwiIHJ5PVwiMVwiLz48cGF0aCBkPVwiTTE2IDRoMmEyIDIgMCAwIDEgMiAydjE0YTIgMiAwIDAgMS0yIDJINmEyIDIgMCAwIDEtMi0yVjZhMiAyIDAgMCAxIDItMmgyXCIvPjxwYXRoIGQ9XCJtOSAxNCAyIDIgNC00XCIvPjwvc3ZnPixcbiAgICBNYXBQaW46ICh7IGNsYXNzTmFtZSB9OiB7IGNsYXNzTmFtZTogc3RyaW5nIH0pID0+IDxzdmcgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCI+PHBhdGggZD1cIk0yMCAxMGMwIDYtOCAxMi04IDEycy04LTYtOC0xMmE4IDggMCAwIDEgMTYgMFpcIi8+PGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMFwiIHI9XCIzXCIvPjwvc3ZnPixcbiAgICBQaG9uZTogKHsgY2xhc3NOYW1lIH06IHsgY2xhc3NOYW1lOiBzdHJpbmcgfSkgPT4gPHN2ZyBjbGFzc05hbWU9e2NsYXNzTmFtZX0geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIj48cGF0aCBkPVwiTTIyIDE2LjkydjNhMiAyIDAgMCAxLTIuMTggMiAxOS43OSAxOS43OSAwIDAgMS04LjYzLTMuMDcgMTkuNSAxOS41IDAgMCAxLTYtNiAxOS43OSAxOS43OSAwIDAgMS0zLjA3LTguNjNBMiAyIDAgMCAxIDQuMTEgMmgzYTIgMiAwIDAgMSAyIDEuNzIgMTIuODQgMTIuODQgMCAwIDAgLjcgMi44MSAyIDIgMCAwIDEtLjQ1IDIuMTFMOC4wOSA5LjkxYTE2IDE2IDAgMCAwIDYgNmwxLjI3LTEuMjdhMiAyIDAgMCAxIDIuMTEtLjQ1IDEyLjg0IDEyLjg0IDAgMCAwIDIuODEuN0EyIDIgMCAwIDEgMjIgMTYuOTJ6XCIvPjwvc3ZnPixcbiAgfSksIFtdKTtcblxuICBjb25zdCBTdmdDb21wb25lbnQgPSBTdmdNYXBbbmFtZSBhcyBrZXlvZiB0eXBlb2YgU3ZnTWFwXTtcbiAgaWYgKCFTdmdDb21wb25lbnQpIHJldHVybiBudWxsO1xuICByZXR1cm4gPFN2Z0NvbXBvbmVudCBjbGFzc05hbWU9e2NsYXNzTmFtZX0gLz47XG59O1xuXG4vLyA9PT0gTmF2TGluayBDb21wb25lbnQgPT09XG5pbnRlcmZhY2UgTmF2TGlua1Byb3BzIHtcbiAgcGFnZTogc3RyaW5nO1xuICBjdXJyZW50UGFnZTogc3RyaW5nO1xuICBzZXRDdXJyZW50UGFnZTogKHBhZ2U6IHN0cmluZykgPT4gdm9pZDtcbiAgaXNNb2JpbGU/OiBib29sZWFuO1xufVxuXG5jb25zdCBOYXZMaW5rID0gKHsgcGFnZSwgY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlLCBpc01vYmlsZSA9IGZhbHNlIH06IE5hdkxpbmtQcm9wcykgPT4ge1xuICBjb25zdCBpc0FjdGl2ZSA9IGN1cnJlbnRQYWdlID09PSBwYWdlO1xuICBjb25zdCBiYXNlQ2xhc3NlcyA9IGlzTW9iaWxlXG4gICAgPyBcImJsb2NrIHctZnVsbCB0ZXh0LWxlZnQgcHgtNCBweS0zIHRleHQtbGcgZm9udC1tZWRpdW0gYm9yZGVyLWwtNFwiXG4gICAgOiBcInJlbGF0aXZlIHB4LTQgcHktMiBmb250LXNlbWlib2xkIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCBiZWZvcmU6YWJzb2x1dGUgYmVmb3JlOmluc2V0LXgtMCBiZWZvcmU6Ym90dG9tLTAgYmVmb3JlOmgtMSBiZWZvcmU6cm91bmRlZC10XCI7XG5cbiAgY29uc3QgYWN0aXZlQ2xhc3NlcyA9IGlzTW9iaWxlXG4gICAgPyBgYmctZ3JheS0xMDAgdGV4dC1ibHVlLTkwMCBib3JkZXItYW1iZXItNTAwYFxuICAgIDogYHRleHQtYW1iZXItNTAwIGJlZm9yZTpiZy1hbWJlci01MDBgO1xuXG4gIGNvbnN0IGluYWN0aXZlQ2xhc3NlcyA9IGlzTW9iaWxlXG4gICAgPyBgdGV4dC1ncmF5LTcwMCBib3JkZXItdHJhbnNwYXJlbnQgaG92ZXI6YmctZ3JheS01MGBcbiAgICA6IGB0ZXh0LXdoaXRlIGhvdmVyOnRleHQtYW1iZXItNTAwLzgwIGJlZm9yZTpiZy10cmFuc3BhcmVudCBob3ZlcjpiZWZvcmU6YmctYW1iZXItNTAwLzUwYDtcblxuICBjb25zdCBpY29uTmFtZSA9IHtcbiAgICBbUEFHRVMuSE9NRV06ICdIb21lJyxcbiAgICBbUEFHRVMuQUJPVVRdOiAnVXNlcnMnLFxuICAgIFtQQUdFUy5BQ0FERU1JQ1NdOiAnQm9va09wZW4nLFxuICAgIFtQQUdFUy5BRE1JU1NJT05TXTogJ0NsaXBib2FyZENoZWNrJyxcbiAgICBbUEFHRVMuTkVXU106ICdDYWxlbmRhcicsXG4gICAgW1BBR0VTLkdBTExFUlldOiAnSW1hZ2UnLFxuICAgIFtQQUdFUy5DT05UQUNUXTogJ01haWwnLFxuICB9W3BhZ2VdO1xuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgb25DbGljaz17KCkgPT4gc2V0Q3VycmVudFBhZ2UocGFnZSl9XG4gICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc2VzfSAke2lzQWN0aXZlID8gYWN0aXZlQ2xhc3NlcyA6IGluYWN0aXZlQ2xhc3Nlc31gfVxuICAgID5cbiAgICAgIHtpc01vYmlsZSAmJiA8SWNvbiBuYW1lPXtpY29uTmFtZSB8fCAnSG9tZSd9IGNsYXNzTmFtZT1cImlubGluZSB3LTUgaC01IG1yLTNcIiAvPn1cbiAgICAgIHtwYWdlfVxuICAgIDwvYnV0dG9uPlxuICApO1xufTtcblxuLy8gPT09IEhlYWRlciBDb21wb25lbnQgPT09XG5pbnRlcmZhY2UgSGVhZGVyUHJvcHMge1xuICBjdXJyZW50UGFnZTogc3RyaW5nO1xuICBzZXRDdXJyZW50UGFnZTogKHBhZ2U6IHN0cmluZykgPT4gdm9pZDtcbiAgc2V0SXNQb3J0YWxPcGVuOiAob3BlbjogYm9vbGVhbikgPT4gdm9pZDtcbn1cblxuY29uc3QgSGVhZGVyID0gKHsgY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlLCBzZXRJc1BvcnRhbE9wZW4gfTogSGVhZGVyUHJvcHMpID0+IHtcbiAgY29uc3QgW2lzTWVudU9wZW4sIHNldElzTWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNNZW51T3BlbihmYWxzZSk7XG4gIH0sIFtjdXJyZW50UGFnZV0pO1xuXG4gIGNvbnN0IG5hdkl0ZW1zID0gT2JqZWN0LnZhbHVlcyhQQUdFUyk7XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17YHN0aWNreSB0b3AtMCB6LTUwIGJnLSR7UFJJTUFSWV9DT0xPUn0gc2hhZG93LWxnYH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGgtMjBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTBcIj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0Q3VycmVudFBhZ2UoUEFHRVMuSE9NRSl9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHctOCBoLTggcm91bmRlZC1mdWxsIGJnLSR7QUNDRU5UX0NPTE9SfSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LSR7UFJJTUFSWV9DT0xPUn0gZm9udC1ibGFjayB0ZXh0LXhsYH0+VDwvZGl2PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtZXh0cmFib2xkIHRleHQtd2hpdGUgdHJhY2tpbmctdGlnaHQgaGlkZGVuIHNtOmlubGluZVwiPntTQ0hPT0xfTkFNRX08L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1leHRyYWJvbGQgdGV4dC13aGl0ZSB0cmFja2luZy10aWdodCBzbTpoaWRkZW5cIj5LaXl1bWJhIFRTUzwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6ZmxleCBsZzpzcGFjZS14LTFcIj5cbiAgICAgICAgICAgIHtuYXZJdGVtcy5tYXAocGFnZSA9PiAoXG4gICAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgICAga2V5PXtwYWdlfVxuICAgICAgICAgICAgICAgIHBhZ2U9e3BhZ2V9XG4gICAgICAgICAgICAgICAgY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfVxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQYWdlPXtzZXRDdXJyZW50UGFnZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvbmF2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTNcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNQb3J0YWxPcGVuKHRydWUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoaWRkZW4gc206aW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHB4LTQgcHktMiBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtc20gZm9udC1tZWRpdW0gcm91bmRlZC1mdWxsIHRleHQtJHtQUklNQVJZX0NPTE9SfSBiZy0ke0FDQ0VOVF9DT0xPUn0gaG92ZXI6YmctYW1iZXItNjAwIHRyYW5zaXRpb24gZHVyYXRpb24tMTUwIHNoYWRvdy1tZGB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJMb2dJblwiIGNsYXNzTmFtZT1cInctNSBoLTUgbXItMlwiIC8+XG4gICAgICAgICAgICAgIFBvcnRhbCBMb2dpblxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxnOmhpZGRlbiB0ZXh0LXdoaXRlIHAtMiByb3VuZGVkLW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy13aGl0ZVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzTWVudU9wZW4oIWlzTWVudU9wZW4pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7aXNNZW51T3BlbiA/IDxJY29uIG5hbWU9XCJYXCIgY2xhc3NOYW1lPVwidy02IGgtNlwiIC8+IDogPEljb24gbmFtZT1cIk1lbnVcIiBjbGFzc05hbWU9XCJ3LTYgaC02XCIgLz59XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAge2lzTWVudU9wZW4gJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmhpZGRlbiBiZy13aGl0ZSBzaGFkb3cteGwgYm9yZGVyLXQgYm9yZGVyLWdyYXktMjAwIGFic29sdXRlIHctZnVsbFwiPlxuICAgICAgICAgIHtuYXZJdGVtcy5tYXAocGFnZSA9PiAoXG4gICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICBrZXk9e3BhZ2V9XG4gICAgICAgICAgICAgIHBhZ2U9e3BhZ2V9XG4gICAgICAgICAgICAgIGN1cnJlbnRQYWdlPXtjdXJyZW50UGFnZX1cbiAgICAgICAgICAgICAgc2V0Q3VycmVudFBhZ2U9e3NldEN1cnJlbnRQYWdlfVxuICAgICAgICAgICAgICBpc01vYmlsZT17dHJ1ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNQb3J0YWxPcGVuKHRydWUpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy1mdWxsIHRleHQtbGVmdCBweC00IHB5LTMgdGV4dC1sZyBmb250LW1lZGl1bSB0ZXh0LSR7UFJJTUFSWV9DT0xPUn0gYmctYW1iZXItNTAwLzEwIGhvdmVyOmJnLWFtYmVyLTUwMC8yMCBmbGV4IGl0ZW1zLWNlbnRlcmB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEljb24gbmFtZT1cIkxvZ0luXCIgY2xhc3NOYW1lPVwidy01IGgtNSBtci0zXCIgLz5cbiAgICAgICAgICAgIFBvcnRhbCBMb2dpblxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9oZWFkZXI+XG4gICk7XG59O1xuXG4vLyA9PT0gRm9vdGVyIENvbXBvbmVudCA9PT1cbmludGVyZmFjZSBGb290ZXJQcm9wcyB7XG4gIHNldEN1cnJlbnRQYWdlOiAocGFnZTogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5jb25zdCBGb290ZXIgPSAoeyBzZXRDdXJyZW50UGFnZSB9OiBGb290ZXJQcm9wcykgPT4gKFxuICA8Zm9vdGVyIGNsYXNzTmFtZT17YGJnLWdyYXktODAwIHRleHQtd2hpdGUgbXQtMTJgfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHAtOCBsZzpwLTEyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTQgZ2FwLTggYm9yZGVyLWIgYm9yZGVyLWdyYXktNzAwIHBiLTggbWItOFwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9e2B0ZXh0LXhsIGZvbnQtYm9sZCBtYi00IHRleHQtJHtBQ0NFTlRfQ09MT1J9YH0+e1NDSE9PTF9OQU1FfTwvaDU+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNDAwXCI+UC5PLiBCb3ggMTIzNCwgS2l5dW1iYSwgVUc8L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNDAwIG10LTFcIj5FbWFpbDogaW5mb0BraXl1bWJhLXRzcy5lZHU8L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNDAwIG10LTFcIj5QaG9uZTogKzI1NiAoMCkgNzc3IDEyMyA0NTY8L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCBtYi00XCI+UXVpY2sgTGlua3M8L2g1PlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgIHtbUEFHRVMuSE9NRSwgUEFHRVMuQUNBREVNSUNTLCBQQUdFUy5BRE1JU1NJT05TLCBQQUdFUy5DT05UQUNUXS5tYXAocGFnZSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e3BhZ2V9PlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRQYWdlKHBhZ2UpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tY29sb3JzIHRleHQtc21cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtwYWdlfVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIG1iLTRcIj5SZXNvdXJjZXM8L2g1PlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uLWNvbG9ycyB0ZXh0LXNtXCI+U3R1ZGVudCBIYW5kYm9vazwvYT48L2xpPlxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tY29sb3JzIHRleHQtc21cIj5MaWJyYXJ5IFNlcnZpY2VzPC9hPjwvbGk+XG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbi1jb2xvcnMgdGV4dC1zbVwiPkNhcmVlciBHdWlkYW5jZTwvYT48L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCBtYi00XCI+Q29ubmVjdDwvaDU+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtNFwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9e2B0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtYW1iZXItNTAwYH0gYXJpYS1sYWJlbD1cIkZhY2Vib29rXCI+XG4gICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy02IGgtNlwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+PHBhdGggZD1cIk0xNCAxMWgtMnYtM2gydjN6bTQgMGgtMnYtM2gydjN6bS00IDRoLTJ2LTNoMnYzem00IDBoLTJ2LTNoMnYzem0wLThoLTRjLTEuMSAwLTIgLjktMiAydjRjMCAxLjEuOSAyIDIgMmg0YzEuMSAwIDItLjkgMi0ydi00YzAtMS4xLS45LTItMi0yek0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOHpcIi8+PC9zdmc+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT17YHRleHQtZ3JheS00MDAgaG92ZXI6dGV4dC1hbWJlci01MDBgfSBhcmlhLWxhYmVsPVwiVHdpdHRlclwiPlxuICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNiBoLTZcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiPjxwYXRoIGQ9XCJNMjIuNDYgNmMtLjguNDQtMS42Ni43My0yLjU4Ljg1LjkxLS41NCAxLjYtMS40IDEuOTMtMi40LS44NS41LTEuNzkuODctMi43OSAxLjA3QzE4LjY3IDQuNyAxNy41NiA0IDE2LjMyIDRjLTIuNCAwLTQuMzUgMS45NS00LjM1IDQuMzUgMCAuMzQuMDQuNjcuMTEuOTktMy42Mi0uMTgtNi44My0xLjkyLTguOTgtNC41Mi0uMzcuNjQtLjU4IDEuNC0uNTggMi4yIDAgMS41MS43NyAyLjg1IDEuOTQgMy42My0uNy0uMDItMS4zNS0uMjEtMS45Mi0uNTN2LjA1YzAgMi4xIDEuNSAzLjg1IDMuNDkgNC4yNC0uMzYuMS0uNzMuMTUtMS4xMS4xNS0uMjcgMC0uNTMtLjAyLS43OS0uMDguNTUgMS43MyAyLjE1IDMgNC4wNSAzLjA0LTEuNDkgMS4xNy0zLjM3IDEuODctNS40IDEuODctLjM1IDAtLjY5LS4wMi0xLjAyLS4wNiAxLjk0IDEuMjUgNC4yNSAyIDYuNzUgMiA4LjEgMCAxMi41NS02LjcgMTIuNTUtMTIuNTUgMC0uMi0uMDEtLjQtLjAyLS42Ljg2LS42MiAxLjYtMS4zOCAyLjE5LTIuMjd6XCIvPjwvc3ZnPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTQwMCBwdC00XCI+XG4gICAgICAgICZjb3B5OyB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSB7U0NIT09MX05BTUV9LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZm9vdGVyPlxuKTtcblxuLy8gPT09IFBhZ2UgQ29tcG9uZW50cyA9PT1cblxuY29uc3QgSGVyb1NlY3Rpb24gPSAoeyBzZXRDdXJyZW50UGFnZSB9OiB7IHNldEN1cnJlbnRQYWdlOiAocGFnZTogc3RyaW5nKSA9PiB2b2lkIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e2ByZWxhdGl2ZSBiZy1ibHVlLTkwMCBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LXhsYH0+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIG9wYWNpdHktMjAgYmctW3VybCgnaHR0cHM6Ly9wbGFjZWhvbGQuY28vMTIwMHg4MDAvMjU2M0VCL2ZmZmZmZj90ZXh0PUtpeXVtYmErVFNTK0NhbXB1cycpXSBiZy1jb3ZlciBiZy1jZW50ZXJcIj48L2Rpdj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgY29udGFpbmVyIG14LWF1dG8gcHgtNCBweS0xNiBzbTpweS0yNCBsZzpweS0zMiB0ZXh0LWNlbnRlclwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIHNtOnRleHQtNnhsIGZvbnQtZXh0cmFib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtd2hpdGUgbWItNFwiPlxuICAgICAgICB7U0NIT09MX05BTUV9XG4gICAgICA8L2gxPlxuICAgICAgPHAgY2xhc3NOYW1lPXtgdGV4dC14bCBzbTp0ZXh0LTJ4bCB0ZXh0LWFtYmVyLTUwMCBmb250LW1lZGl1bSBtYi04YH0+XG4gICAgICAgIHtUQUdMSU5FfVxuICAgICAgPC9wPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cganVzdGlmeS1jZW50ZXIgc3BhY2UteS00IHNtOnNwYWNlLXktMCBzbTpzcGFjZS14LTZcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRQYWdlKFBBR0VTLkFETUlTU0lPTlMpfVxuICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTggcHktMyB0ZXh0LWxnIGZvbnQtYm9sZCByb3VuZGVkLXhsIHRleHQtYmx1ZS05MDAgYmctYW1iZXItNTAwIGhvdmVyOmJnLWFtYmVyLTYwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtWzEuMDJdIHNoYWRvdy1sZ2B9XG4gICAgICAgID5cbiAgICAgICAgICBBcHBseSBOb3cgPEljb24gbmFtZT1cIkNsaXBib2FyZENoZWNrXCIgY2xhc3NOYW1lPVwiaW5saW5lIHctNSBoLTUgbWwtMlwiIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q3VycmVudFBhZ2UoUEFHRVMuQUNBREVNSUNTKX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJweC04IHB5LTMgdGV4dC1sZyBmb250LWJvbGQgcm91bmRlZC14bCB0ZXh0LXdoaXRlIGJvcmRlci0yIGJvcmRlci13aGl0ZSBob3ZlcjpiZy13aGl0ZSBob3Zlcjp0ZXh0LWJsdWUtOTAwIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS1bMS4wMl0gc2hhZG93LWxnXCJcbiAgICAgICAgPlxuICAgICAgICAgIEV4cGxvcmUgQWNhZGVtaWNzXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgUXVpY2tMaW5rcyA9ICh7IHNldEN1cnJlbnRQYWdlIH06IHsgc2V0Q3VycmVudFBhZ2U6IChwYWdlOiBzdHJpbmcpID0+IHZvaWQgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgbXQtWy00cmVtXSByZWxhdGl2ZSB6LTIwXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9e2BncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0zIGdhcC02IHAtNiByb3VuZGVkLXhsIGJnLXdoaXRlIHNoYWRvdy0yeGwgYm9yZGVyLXQtNCBib3JkZXItYW1iZXItNTAwYH0+XG4gICAgICA8TGlua0NhcmRcbiAgICAgICAgaWNvbj1cIkJvb2tPcGVuXCJcbiAgICAgICAgdGl0bGU9XCJTdHVkZW50IFJlc291cmNlc1wiXG4gICAgICAgIGRlc2NyaXB0aW9uPVwiQWNjZXNzIHRpbWV0YWJsZXMsIGFzc2lnbm1lbnRzLCBhbmQgZGlnaXRhbCBsaWJyYXJ5LlwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRQYWdlKFBBR0VTLkFDQURFTUlDUyl9XG4gICAgICAvPlxuICAgICAgPExpbmtDYXJkXG4gICAgICAgIGljb249XCJVc2Vyc1wiXG4gICAgICAgIHRpdGxlPVwiVGVhY2hlciBQb3J0YWxcIlxuICAgICAgICBkZXNjcmlwdGlvbj1cIk1hbmFnZSBjbGFzc2VzLCBzdWJtaXQgZ3JhZGVzLCBhbmQgYWNjZXNzIHRlYWNoaW5nIG1hdGVyaWFscy5cIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBhbGVydChcIlBvcnRhbCBsb2dpbiByZXF1aXJlZCFcIil9XG4gICAgICAvPlxuICAgICAgPExpbmtDYXJkXG4gICAgICAgIGljb249XCJDYWxlbmRhclwiXG4gICAgICAgIHRpdGxlPVwiRXZlbnRzICYgQ2FsZW5kYXJcIlxuICAgICAgICBkZXNjcmlwdGlvbj1cIlNlZSB1cGNvbWluZyBzY2hvb2wgZXZlbnRzIGFuZCBhY2FkZW1pYyBkYXRlcy5cIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50UGFnZShQQUdFUy5ORVdTKX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuaW50ZXJmYWNlIExpbmtDYXJkUHJvcHMge1xuICBpY29uOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIG9uQ2xpY2s6ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IExpbmtDYXJkID0gKHsgaWNvbiwgdGl0bGUsIGRlc2NyaXB0aW9uLCBvbkNsaWNrIH06IExpbmtDYXJkUHJvcHMpID0+IChcbiAgPGJ1dHRvblxuICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgY2xhc3NOYW1lPXtgcC02IGJnLWdyYXktNTAgcm91bmRlZC1sZyB0ZXh0LWxlZnQgc2hhZG93LWxnIGhvdmVyOnNoYWRvdy14bCBob3ZlcjpyaW5nLTIgaG92ZXI6cmluZy1hbWJlci01MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgdy1mdWxsIGZsZXggZmxleC1jb2xgfVxuICA+XG4gICAgPEljb24gbmFtZT17aWNvbn0gY2xhc3NOYW1lPXtgdy04IGgtOCBtYi0zIHRleHQtYmx1ZS05MDBgfSAvPlxuICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi0xIHRleHQtZ3JheS04MDBcIj57dGl0bGV9PC9oMz5cbiAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS02MDBcIj57ZGVzY3JpcHRpb259PC9wPlxuICA8L2J1dHRvbj5cbik7XG5cbmNvbnN0IE5ld3NIaWdobGlnaHRzID0gKHsgc2V0Q3VycmVudFBhZ2UgfTogeyBzZXRDdXJyZW50UGFnZTogKHBhZ2U6IHN0cmluZykgPT4gdm9pZCB9KSA9PiAoXG4gIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgcHktMTZcIj5cbiAgICA8aDIgY2xhc3NOYW1lPXtgdGV4dC00eGwgZm9udC1leHRyYWJvbGQgdGV4dC1ibHVlLTkwMCBtYi04IGJvcmRlci1iLTQgYm9yZGVyLWFtYmVyLTUwMCBwYi0yIGlubGluZS1ibG9ja2B9PkxhdGVzdCBTY2hvb2wgTmV3czwvaDI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0zIGdhcC04XCI+XG4gICAgICB7RFVNTVlfTkVXUy5tYXAobmV3cyA9PiAoXG4gICAgICAgIDxhcnRpY2xlIGtleT17bmV3cy5pZH0gY2xhc3NOYW1lPVwiYmctd2hpdGUgcC02IHJvdW5kZWQteGwgc2hhZG93LWxnIGhvdmVyOnNoYWRvdy0yeGwgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgYm9yZGVyLXQtNCBib3JkZXItZ3JheS0xMDAgaG92ZXI6Ym9yZGVyLWFtYmVyLTUwMFwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMCBtYi0yXCI+e25ld3MuZGF0ZX08L3A+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT17YHRleHQteGwgZm9udC1ib2xkIHRleHQtYmx1ZS05MDAgbWItM2B9PntuZXdzLnRpdGxlfTwvaDM+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMCB0ZXh0LWJhc2UgbWItNFwiPntuZXdzLnN1bW1hcnl9PC9wPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRQYWdlKFBBR0VTLk5FV1MpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1ibHVlLTkwMCBmb250LXNlbWlib2xkIGhvdmVyOnRleHQtYW1iZXItNTAwIHRyYW5zaXRpb24tY29sb3JzIGZsZXggaXRlbXMtY2VudGVyYH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBSZWFkIE1vcmVcbiAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy00IGgtNCBtbC0xXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPVwiMlwiIGQ9XCJNMTcuNSA4LjVsLTUgNS01LTVcIj48L3BhdGg+PC9zdmc+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICA8L3NlY3Rpb24+XG4pO1xuXG5jb25zdCBIb21lUGFnZSA9ICh7IHNldEN1cnJlbnRQYWdlIH06IHsgc2V0Q3VycmVudFBhZ2U6IChwYWdlOiBzdHJpbmcpID0+IHZvaWQgfSkgPT4gKFxuICA8bWFpbiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW5cIj5cbiAgICA8SGVyb1NlY3Rpb24gc2V0Q3VycmVudFBhZ2U9e3NldEN1cnJlbnRQYWdlfSAvPlxuICAgIDxRdWlja0xpbmtzIHNldEN1cnJlbnRQYWdlPXtzZXRDdXJyZW50UGFnZX0gLz5cbiAgICA8TmV3c0hpZ2hsaWdodHMgc2V0Q3VycmVudFBhZ2U9e3NldEN1cnJlbnRQYWdlfSAvPlxuXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgYmctYmx1ZS05MDAvNSBweS0xNmB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IHRleHQtY2VudGVyXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9e2B0ZXh0LTN4bCBzbTp0ZXh0LTR4bCBmb250LWV4dHJhYm9sZCB0ZXh0LWJsdWUtOTAwIG1iLTRgfT5cbiAgICAgICAgICBUZWNobmljYWwgU2tpbGxzIGZvciBhIE1vZGVybiBGdXR1cmVcbiAgICAgICAgPC9oMj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWdyYXktNzAwIG1heC13LTN4bCBteC1hdXRvIG1iLThcIj5cbiAgICAgICAgICBLaXl1bWJhIFRTUyBjb21iaW5lcyByaWdvcm91cyBhY2FkZW1pYyBzdGFuZGFyZHMgd2l0aCBoYW5kcy1vbiB0ZWNobmljYWwgdHJhaW5pbmcsIHByZXBhcmluZyBzdHVkZW50cyB0byBiZSBsZWFkZXJzIGFuZCBpbm5vdmF0b3JzIGluIGEgcmFwaWRseSBldm9sdmluZyBnbG9iYWwgZWNvbm9teS5cbiAgICAgICAgPC9wPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q3VycmVudFBhZ2UoUEFHRVMuQUJPVVQpfVxuICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTYgcHktMyBmb250LXNlbWlib2xkIHJvdW5kZWQtZnVsbCB0ZXh0LXdoaXRlIGJnLWJsdWUtOTAwIGhvdmVyOmJnLWJsdWUtOTAwLzkwIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIHNoYWRvdy1tZGB9XG4gICAgICAgID5cbiAgICAgICAgICBEaXNjb3ZlciBPdXIgTWlzc2lvblxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgPC9tYWluPlxuKTtcblxuaW50ZXJmYWNlIFBhZ2VMYXlvdXRQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbmNvbnN0IFBhZ2VMYXlvdXQgPSAoeyB0aXRsZSwgY2hpbGRyZW4gfTogUGFnZUxheW91dFByb3BzKSA9PiAoXG4gIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgcHktMTIgbWluLWgtWzgwdmhdXCI+XG4gICAgPGgxIGNsYXNzTmFtZT17YHRleHQtNHhsIGZvbnQtZXh0cmFib2xkIHRleHQtYmx1ZS05MDAgbWItNCBib3JkZXItYi00IGJvcmRlci1hbWJlci01MDAgcGItMmB9Pnt0aXRsZX08L2gxPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9tYWluPlxuKTtcblxuY29uc3QgQWJvdXRQYWdlID0gKCkgPT4gKFxuICA8UGFnZUxheW91dCB0aXRsZT17UEFHRVMuQUJPVVR9PlxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1iLTEwXCI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtZ3JheS04MDAgbWItM1wiPk91ciBNaXNzaW9uICYgVmlzaW9uPC9oMj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgbWItNFwiPlxuICAgICAgICA8c3Ryb25nPk1pc3Npb246PC9zdHJvbmc+IFRvIHByb3ZpZGUgYSBob2xpc3RpYyB0ZWNobmljYWwgYW5kIGFjYWRlbWljIGVkdWNhdGlvbiB0aGF0IGVtcG93ZXJzIHN0dWRlbnRzIHdpdGggY3JpdGljYWwgdGhpbmtpbmcsIHByYWN0aWNhbCBza2lsbHMsIGFuZCBhIHN0cm9uZyBzZW5zZSBvZiBjb21tdW5pdHkgcmVzcG9uc2liaWxpdHkuXG4gICAgICA8L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgIDxzdHJvbmc+VmlzaW9uOjwvc3Ryb25nPiBUbyBiZSB0aGUgbGVhZGluZyBzZWNvbmRhcnkgdGVjaG5pY2FsIGluc3RpdHV0aW9uIGluIHRoZSByZWdpb24sIHJlY29nbml6ZWQgZm9yIGV4Y2VsbGVuY2UgaW4gaW5ub3ZhdGlvbiwgY2hhcmFjdGVyIGRldmVsb3BtZW50LCBhbmQgc3R1ZGVudCBzdWNjZXNzLlxuICAgICAgPC9wPlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1iLTEwXCI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtZ3JheS04MDAgbWItM1wiPlByaW5jaXBhbCdzIE1lc3NhZ2U8L2gyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIHAtNiByb3VuZGVkLWxnIHNoYWRvdy1pbm5lciBib3JkZXItbC00IGJvcmRlci1hbWJlci01MDBcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiaXRhbGljIHRleHQtZ3JheS03MDBcIj5cbiAgICAgICAgICBcIldlbGNvbWUgdG8gS2l5dW1iYSBUU1MhIFdlIGFyZSBkZWRpY2F0ZWQgdG8gcHJvdmlkaW5nIGFuIGVudmlyb25tZW50IHdoZXJlIGV2ZXJ5IHN0dWRlbnQgY2FuIGhhcm5lc3MgdGhlaXIgdGVjaG5pY2FsIGFwdGl0dWRlIGFuZCBhY2hpZXZlIHRoZWlyIGZ1bGwgcG90ZW50aWFsLiBPdXIgZm9jdXMgcmVtYWlucyBvbiBwcmVwYXJpbmcgcmVzb3VyY2VmdWwsIGRpc2NpcGxpbmVkLCBhbmQgZ2xvYmFsbHkgY29tcGV0aXRpdmUgZ3JhZHVhdGVzLlwiXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtgbXQtNCBmb250LXNlbWlib2xkIHRleHQtcmlnaHQgdGV4dC1ibHVlLTkwMGB9PuKAlCBEci4gTHdhc2EgS2F0ZSwgUHJpbmNpcGFsPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtZ3JheS04MDAgbWItNVwiPk91ciBFc3RlZW1lZCBGYWN1bHR5PC9oMj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMyBnYXAtNlwiPlxuICAgICAgICB7RFVNTVlfRkFDVUxUWS5tYXAoKHBlcnNvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtNSByb3VuZGVkLWxnIHNoYWRvdy1sZyB0ZXh0LWNlbnRlciBib3JkZXItdC0yIGJvcmRlci1ibHVlLTkwMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTIwIGgtMjAgbXgtYXV0byByb3VuZGVkLWZ1bGwgYmctZ3JheS0yMDAgbWItMyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWdyYXktNTAwIGZvbnQtYm9sZCB0ZXh0LTN4bCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgPEljb24gbmFtZT1cIlVzZXJzXCIgY2xhc3NOYW1lPSd3LTEwIGgtMTAnIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktODAwXCI+e3BlcnNvbi5uYW1lfTwvaDM+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2B0ZXh0LWFtYmVyLTUwMCBmb250LW1lZGl1bWB9PntwZXJzb24ucm9sZX08L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDAgbXQtMVwiPntwZXJzb24uc3BlY2lhbHR5fTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIDwvUGFnZUxheW91dD5cbik7XG5cbmNvbnN0IEFjYWRlbWljc1BhZ2UgPSAoKSA9PiAoXG4gIDxQYWdlTGF5b3V0IHRpdGxlPXtQQUdFUy5BQ0FERU1JQ1N9PlxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTEwXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtZ3JheS04MDAgbWItNFwiPkNvcmUgVGVjaG5pY2FsIERlcGFydG1lbnRzPC9oMj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNwYWNlLXktMyBsaXN0LWRpc2MgcGwtNSB0ZXh0LWdyYXktNzAwXCI+XG4gICAgICAgICAgPGxpPkF1dG9tb3RpdmUgVGVjaG5vbG9neSAmIE1lY2hhbmljczwvbGk+XG4gICAgICAgICAgPGxpPkVsZWN0cmljYWwgJiBFbGVjdHJvbmljcyBFbmdpbmVlcmluZzwvbGk+XG4gICAgICAgICAgPGxpPkJ1aWxkaW5nICYgQ29uc3RydWN0aW9uIFRlY2hub2xvZ3k8L2xpPlxuICAgICAgICAgIDxsaT5JQ1QgYW5kIENvbXB1dGVyIFNjaWVuY2U8L2xpPlxuICAgICAgICAgIDxsaT5NZXRhbCBGYWJyaWNhdGlvbiAmIFdlbGRpbmc8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtZ3JheS04MDAgbWItNFwiPkFjYWRlbWljIFByb2dyYW1zPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBiZy1ncmF5LTUwIHJvdW5kZWQtbGcgc2hhZG93LXNtXCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWxnIHRleHQtYmx1ZS05MDBcIj5Mb3dlciBTZWNvbmRhcnkgKFMxIC0gUzIpPC9oMz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTYwMFwiPkludGVncmF0ZWQgY3VycmljdWx1bSBmb2N1c2luZyBvbiBmb3VuZGF0aW9uIHNjaWVuY2VzIGFuZCB0ZWNobmljYWwgb3JpZW50YXRpb24uPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJnLWdyYXktNTAgcm91bmRlZC1sZyBzaGFkb3ctc21cIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtbGcgdGV4dC1ibHVlLTkwMFwiPlVwcGVyIFNlY29uZGFyeSAoUzMgLSBTNik8L2gzPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+U3BlY2lhbGl6ZWQgdHJhY2tzIGluIHRlY2huaWNhbCBzdWJqZWN0cyBjb21iaW5lZCB3aXRoIG5hdGlvbmFsIGV4YW0gcHJlcGFyYXRpb24uPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm10LTEwIHAtNiBiZy1ibHVlLTkwMC8xMCByb3VuZGVkLXhsIHNoYWRvdy1sZ1wiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktODAwIG1iLTRcIj5SZXNvdXJjZXMgYW5kIERvd25sb2FkczwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC00XCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yIHB4LTQgcHktMiByb3VuZGVkLWxnIGJnLWFtYmVyLTUwMCB0ZXh0LWJsdWUtOTAwIGZvbnQtc2VtaWJvbGQgaG92ZXI6YmctYW1iZXItNjAwIHRyYW5zaXRpb25gfT5cbiAgICAgICAgICA8SWNvbiBuYW1lPVwiQm9va09wZW5cIiBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz5cbiAgICAgICAgICA8c3Bhbj5TeWxsYWJ1cyBEb3dubG9hZHMgKFBERik8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMiBweC00IHB5LTIgcm91bmRlZC1sZyBiZy1ncmF5LTcwMCB0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgaG92ZXI6YmctZ3JheS02MDAgdHJhbnNpdGlvbmB9PlxuICAgICAgICAgIDxJY29uIG5hbWU9XCJDYWxlbmRhclwiIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxuICAgICAgICAgIDxzcGFuPkFjYWRlbWljIENhbGVuZGFyPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgPC9QYWdlTGF5b3V0PlxuKTtcblxuaW50ZXJmYWNlIElucHV0RmllbGRQcm9wcyB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHR5cGU6IHN0cmluZztcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIG9wdGlvbnM/OiBzdHJpbmdbXTtcbn1cblxuY29uc3QgSW5wdXRGaWVsZCA9ICh7IGxhYmVsLCB0eXBlLCBwbGFjZWhvbGRlciwgb3B0aW9ucyB9OiBJbnB1dEZpZWxkUHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwIG1iLTFcIj57bGFiZWx9PC9sYWJlbD5cbiAgICB7dHlwZSA9PT0gJ3NlbGVjdCcgPyAoXG4gICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGcgcC0zIGJnLXdoaXRlIGZvY3VzOnJpbmctYW1iZXItNTAwIGZvY3VzOmJvcmRlci1hbWJlci01MDAgdHJhbnNpdGlvblwiPlxuICAgICAgICB7b3B0aW9ucz8ubWFwKG9wdCA9PiA8b3B0aW9uIGtleT17b3B0fSB2YWx1ZT17b3B0fT57b3B0fTwvb3B0aW9uPil9XG4gICAgICA8L3NlbGVjdD5cbiAgICApIDogKFxuICAgICAgPGlucHV0IHR5cGU9e3R5cGV9IHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn0gcmVxdWlyZWQgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1sZyBwLTMgZm9jdXM6cmluZy1hbWJlci01MDAgZm9jdXM6Ym9yZGVyLWFtYmVyLTUwMCB0cmFuc2l0aW9uXCIgLz5cbiAgICApfVxuICA8L2Rpdj5cbik7XG5cbmludGVyZmFjZSBSZXF1aXJlbWVudEl0ZW1Qcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRldGFpbHM6IHN0cmluZztcbiAgaXNJbXBvcnRhbnQ/OiBib29sZWFuO1xufVxuXG5jb25zdCBSZXF1aXJlbWVudEl0ZW0gPSAoeyB0aXRsZSwgZGV0YWlscywgaXNJbXBvcnRhbnQgPSBmYWxzZSB9OiBSZXF1aXJlbWVudEl0ZW1Qcm9wcykgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17YHAtNCByb3VuZGVkLWxnICR7aXNJbXBvcnRhbnQgPyBgYmctYW1iZXItNTAwLzIwIGJvcmRlci1sLTQgYm9yZGVyLWFtYmVyLTUwMGAgOiAnYmctd2hpdGUgYm9yZGVyLWwtNCBib3JkZXItZ3JheS0zMDAnfWB9PlxuICAgIDxoMyBjbGFzc05hbWU9e2Bmb250LXNlbWlib2xkICR7aXNJbXBvcnRhbnQgPyBgdGV4dC1ibHVlLTkwMGAgOiAndGV4dC1ncmF5LTgwMCd9YH0+e3RpdGxlfTwvaDM+XG4gICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+e2RldGFpbHN9PC9wPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IEFkbWlzc2lvbnNQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbaXNTdWJtaXR0ZWQsIHNldElzU3VibWl0dGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZTogUmVhY3QuRm9ybUV2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldElzU3VibWl0dGVkKHRydWUpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0SXNTdWJtaXR0ZWQoZmFsc2UpLCA1MDAwKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlTGF5b3V0IHRpdGxlPXtQQUdFUy5BRE1JU1NJT05TfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBsZzpncmlkLWNvbHMtMyBnYXAtMTBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpjb2wtc3Bhbi0yXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktODAwIG1iLTRcIj5PbmxpbmUgQXBwbGljYXRpb24gRm9ybTwvaDI+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwicC02IGJnLXdoaXRlIHJvdW5kZWQteGwgc2hhZG93LWxnIGJvcmRlci10LTQgYm9yZGVyLWFtYmVyLTUwMFwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNCB0ZXh0LWdyYXktNjAwXCI+UGxlYXNlIGZpbGwgb3V0IHRoZSBmb3JtIGNhcmVmdWxseS4gQWxsIGZpZWxkcyBhcmUgcmVxdWlyZWQuPC9wPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgc206Z3JpZC1jb2xzLTIgZ2FwLTQgbWItNFwiPlxuICAgICAgICAgICAgICA8SW5wdXRGaWVsZCBsYWJlbD1cIkFwcGxpY2FudCBGdWxsIE5hbWVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiSmFuZSBOLiBEb2VcIiAvPlxuICAgICAgICAgICAgICA8SW5wdXRGaWVsZCBsYWJlbD1cIkRlc2lyZWQgQ291cnNlL1RyYWNrXCIgdHlwZT1cInNlbGVjdFwiIG9wdGlvbnM9e1tcIkF1dG9tb3RpdmVcIiwgXCJFbGVjdHJpY2FsXCIsIFwiSUNUXCIsIFwiT3RoZXJcIl19IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBzbTpncmlkLWNvbHMtMiBnYXAtNCBtYi00XCI+XG4gICAgICAgICAgICAgIDxJbnB1dEZpZWxkIGxhYmVsPVwiRW1haWwgQWRkcmVzc1wiIHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiamFuZUBleGFtcGxlLmNvbVwiIC8+XG4gICAgICAgICAgICAgIDxJbnB1dEZpZWxkIGxhYmVsPVwiUGhvbmUgTnVtYmVyXCIgdHlwZT1cInRlbFwiIHBsYWNlaG9sZGVyPVwiKzI1NiA3eHggeHh4IHh4eFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNlwiPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwIG1iLTFcIiBodG1sRm9yPVwibWVzc2FnZVwiPlByZXZpb3VzIEVkdWNhdGlvbiBTdW1tYXJ5PC9sYWJlbD5cbiAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwibWVzc2FnZVwiIHJvd3M9ezR9IGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGcgcC0zIGZvY3VzOnJpbmctYW1iZXItNTAwIGZvY3VzOmJvcmRlci1hbWJlci01MDAgdHJhbnNpdGlvbiByZXNpemUtbm9uZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgc2Nob29sIG5hbWUsIGdyYWRlcywgYW5kIGdyYWR1YXRpb24geWVhci4uLlwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzU3VibWl0dGVkfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgcHgtNiBweS0zIGZvbnQtYm9sZCByb3VuZGVkLWxnIHRleHQtd2hpdGUgYmctYmx1ZS05MDAgaG92ZXI6YmctYmx1ZS05MDAvOTAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgc2hhZG93LW1kIGRpc2FibGVkOm9wYWNpdHktNTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7aXNTdWJtaXR0ZWQgPyAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJDbGlwYm9hcmRDaGVja1wiIGNsYXNzTmFtZT1cInctNSBoLTUgbXItMiBhbmltYXRlLXB1bHNlXCIgLz5cbiAgICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uIFN1Ym1pdHRlZCFcbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICBcIlN1Ym1pdCBBcHBsaWNhdGlvblwiXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6Y29sLXNwYW4tMVwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1ncmF5LTgwMCBtYi00XCI+UmVxdWlyZW1lbnRzICYgRGVhZGxpbmVzPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMTAwIHAtNSByb3VuZGVkLWxnIHNwYWNlLXktNFwiPlxuICAgICAgICAgICAgPFJlcXVpcmVtZW50SXRlbSB0aXRsZT1cIk1pbmltdW0gRW50cnkgR3JhZGVcIiBkZXRhaWxzPVwiQysgYXZlcmFnZSByZXF1aXJlZCBmb3IgdGVjaG5pY2FsIHN0cmVhbXMuXCIgLz5cbiAgICAgICAgICAgIDxSZXF1aXJlbWVudEl0ZW0gdGl0bGU9XCJBcHBsaWNhdGlvbiBEZWFkbGluZVwiIGRldGFpbHM9XCJEZWNlbWJlciAxNXRoLCAyMDI1XCIgaXNJbXBvcnRhbnQ9e3RydWV9IC8+XG4gICAgICAgICAgICA8UmVxdWlyZW1lbnRJdGVtIHRpdGxlPVwiUmVxdWlyZWQgRG9jdW1lbnRzXCIgZGV0YWlscz1cIkNvcHkgb2YgbmF0aW9uYWwgSUQvQmlydGggQ2VydGlmaWNhdGUgYW5kIGFjYWRlbWljIHRyYW5zY3JpcHRzLlwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9QYWdlTGF5b3V0PlxuICApO1xufTtcblxuY29uc3QgTmV3c0V2ZW50c1BhZ2UgPSAoKSA9PiAoXG4gIDxQYWdlTGF5b3V0IHRpdGxlPXtQQUdFUy5ORVdTfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbGc6Z3JpZC1jb2xzLTMgZ2FwLThcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6Y29sLXNwYW4tMiBzcGFjZS15LThcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktODAwXCI+TGF0ZXN0IEFubm91bmNlbWVudHM8L2gyPlxuICAgICAgICB7RFVNTVlfTkVXUy5tYXAobmV3cyA9PiAoXG4gICAgICAgICAgPGFydGljbGUga2V5PXtuZXdzLmlkfSBjbGFzc05hbWU9XCJwLTYgYmctd2hpdGUgcm91bmRlZC14bCBzaGFkb3ctbWQgYm9yZGVyLWwtNCBib3JkZXItYW1iZXItNTAwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi0yXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMFwiPntuZXdzLmRhdGV9PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BweC0zIHB5LTEgdGV4dC14cyBmb250LXNlbWlib2xkIHJvdW5kZWQtZnVsbCBiZy1ibHVlLTkwMCB0ZXh0LXdoaXRlYH0+TmV3czwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRleHQtZ3JheS04MDAgbWItM1wiPntuZXdzLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+e25ld3Muc3VtbWFyeX0gT3VyIHRlY2huaWNhbCBhY2hpZXZlbWVudHMgY29udGludWUgdG8gc2V0IHRoZSBzdGFuZGFyZCBmb3Igc2Vjb25kYXJ5IGVkdWNhdGlvbi4gVGhpcyBwYXJ0aWN1bGFyIGV2ZW50IGhpZ2hsaWdodHMgdGhlIHN5bmVyZ3kgYmV0d2VlbiBjbGFzc3Jvb20gdGhlb3J5IGFuZCBwcmFjdGljYWwgYXBwbGljYXRpb24uPC9wPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2BtdC0zIHRleHQtYmx1ZS05MDAgZm9udC1zZW1pYm9sZCBob3Zlcjp0ZXh0LWFtYmVyLTUwMCB0cmFuc2l0aW9uLWNvbG9yc2B9PlZpZXcgRnVsbCBBcnRpY2xlPC9idXR0b24+XG4gICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpjb2wtc3Bhbi0xXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1ncmF5LTgwMCBtYi00XCI+VXBjb21pbmcgRXZlbnRzIENhbGVuZGFyPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMCBwLTYgcm91bmRlZC14bCBzaGFkb3ctaW5uZXIgc3BhY2UteS0zXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtbGcgdGV4dC1ibHVlLTkwMFwiPk5vdiA1OiBQVEEgTWVldGluZzwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1sZyB0ZXh0LWJsdWUtOTAwXCI+Tm92IDEyOiBJbnRlci1Ib3VzZSBTcG9ydHMgR2FsYTwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1sZyB0ZXh0LWJsdWUtOTAwXCI+RGVjIDE1OiBBcHBsaWNhdGlvbiBEZWFkbGluZTwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS02MDAgcHQtMlwiPkNoZWNrIGJhY2sgcmVndWxhcmx5IGZvciB1cGRhdGVzIHRvIHRoZSBzY2hvb2wgY2FsZW5kYXIuPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L1BhZ2VMYXlvdXQ+XG4pO1xuXG5jb25zdCBHYWxsZXJ5UGFnZSA9ICgpID0+IChcbiAgPFBhZ2VMYXlvdXQgdGl0bGU9e1BBR0VTLkdBTExFUll9PlxuICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1ncmF5LTgwMCBtYi00XCI+U2hvd2Nhc2luZyBFeGNlbGxlbmNlIGluIFRlY2huaWNhbCBhbmQgQ28tQ3VycmljdWxhciBBY3Rpdml0aWVzPC9oMj5cbiAgICA8cCBjbGFzc05hbWU9XCJtYi04IHRleHQtZ3JheS02MDBcIj5BIHZpc3VhbCB0b3VyIG9mIG91ciBjYW1wdXMsIHN0dWRlbnQgcHJvamVjdHMsIHNwb3J0cywgYW5kIGtleSBzY2hvb2wgZXZlbnRzLjwvcD5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtMyBsZzpncmlkLWNvbHMtNCBnYXAtNFwiPlxuICAgICAge1snUm9ib3RpY3MgQ29tcGV0aXRpb24nLCAnU3BvcnRzIERheScsICdXZWxkaW5nIFdvcmtzaG9wJywgJ1NjaWVuY2UgTGFiJywgJ0dyYWR1YXRpb24gQ2VyZW1vbnknLCAnTGlicmFyeSBSZWFkaW5nJ10ubWFwKChjYXB0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInJlbGF0aXZlIGdyb3VwIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLWxnIHNoYWRvdy1sZ1wiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vcGxhY2Vob2xkLmNvLzQwMHgzMDAvNEY0NkU1L2ZmZmZmZj90ZXh0PSR7Y2FwdGlvbi5yZXBsYWNlKC9cXHMvZywgJysnKX1gfVxuICAgICAgICAgICAgYWx0PXtjYXB0aW9ufVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtNDAgb2JqZWN0LWNvdmVyIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIHRyYW5zZm9ybSBncm91cC1ob3ZlcjpzY2FsZS0xMDVcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BhYnNvbHV0ZSBpbnNldC0wIGJnLWJsdWUtOTAwIGJnLW9wYWNpdHktNDAgZmxleCBpdGVtcy1lbmQgb3BhY2l0eS0wIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwYH0+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwLTMgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj57Y2FwdGlvbn08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gIDwvUGFnZUxheW91dD5cbik7XG5cbmludGVyZmFjZSBDb250YWN0SW5mb1Byb3BzIHtcbiAgaWNvbjogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXRhaWxzOiBzdHJpbmc7XG59XG5cbmNvbnN0IENvbnRhY3RJbmZvID0gKHsgaWNvbiwgdGl0bGUsIGRldGFpbHMgfTogQ29udGFjdEluZm9Qcm9wcykgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgc3BhY2UteC00XCI+XG4gICAgPEljb24gbmFtZT17aWNvbn0gY2xhc3NOYW1lPXtgdy02IGgtNiBmbGV4LXNocmluay0wIHRleHQtYW1iZXItNTAwYH0gLz5cbiAgICA8ZGl2PlxuICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTgwMFwiPnt0aXRsZX08L2gzPlxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCB0ZXh0LXNtXCI+e2RldGFpbHN9PC9wPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IENvbnRhY3RQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbaXNTZW50LCBzZXRJc1NlbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlOiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0SXNTZW50KHRydWUpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0SXNTZW50KGZhbHNlKSwgNTAwMCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZUxheW91dCB0aXRsZT17UEFHRVMuQ09OVEFDVH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbGc6Z3JpZC1jb2xzLTMgZ2FwLTEwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6Y29sLXNwYW4tMlwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1ncmF5LTgwMCBtYi00XCI+U2VuZCBVcyBBbiBJbnF1aXJ5PC9oMj5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJwLTYgYmctd2hpdGUgcm91bmRlZC14bCBzaGFkb3ctbGcgYm9yZGVyLXQtNCBib3JkZXItYW1iZXItNTAwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgc206Z3JpZC1jb2xzLTIgZ2FwLTQgbWItNFwiPlxuICAgICAgICAgICAgICA8SW5wdXRGaWVsZCBsYWJlbD1cIllvdXIgRnVsbCBOYW1lXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkpvaG4gU3Nla2FuZGlcIiAvPlxuICAgICAgICAgICAgICA8SW5wdXRGaWVsZCBsYWJlbD1cIkVtYWlsIEFkZHJlc3NcIiB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cImpvaG5AZW1haWwuY29tXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICAgIDxJbnB1dEZpZWxkIGxhYmVsPVwiU3ViamVjdFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJJbnF1aXJ5IGFib3V0IGFkbWlzc2lvbnNcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTZcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMCBtYi0xXCIgaHRtbEZvcj1cIm1lc3NhZ2VcIj5Zb3VyIE1lc3NhZ2U8L2xhYmVsPlxuICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJtZXNzYWdlXCIgcm93cz17NX0gcmVxdWlyZWQgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1sZyBwLTMgZm9jdXM6cmluZy1hbWJlci01MDAgZm9jdXM6Ym9yZGVyLWFtYmVyLTUwMCB0cmFuc2l0aW9uIHJlc2l6ZS1ub25lXCIgcGxhY2Vob2xkZXI9XCJIb3cgY2FuIHdlIGFzc2lzdCB5b3U/XCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNTZW50fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgcHgtNiBweS0zIGZvbnQtYm9sZCByb3VuZGVkLWxnIHRleHQtd2hpdGUgYmctYmx1ZS05MDAgaG92ZXI6YmctYmx1ZS05MDAvOTAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgc2hhZG93LW1kIGRpc2FibGVkOm9wYWNpdHktNTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7aXNTZW50ID8gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiTWFpbFwiIGNsYXNzTmFtZT1cInctNSBoLTUgbXItMiBhbmltYXRlLXB1bHNlXCIgLz5cbiAgICAgICAgICAgICAgICAgIE1lc3NhZ2UgU2VudCBTdWNjZXNzZnVsbHkhXG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgXCJTZW5kIE1lc3NhZ2VcIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpjb2wtc3Bhbi0xIHNwYWNlLXktNlwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1ncmF5LTgwMCBtYi00XCI+R2V0IGluIFRvdWNoPC9oMj5cbiAgICAgICAgICA8Q29udGFjdEluZm8gaWNvbj1cIk1hcFBpblwiIHRpdGxlPVwiQWRkcmVzc1wiIGRldGFpbHM9XCJLaXl1bWJhIEhpbGwsIFAuTy4gQm94IDEyMzQsIENlbnRyYWwgRGlzdHJpY3QsIFVnYW5kYVwiIC8+XG4gICAgICAgICAgPENvbnRhY3RJbmZvIGljb249XCJQaG9uZVwiIHRpdGxlPVwiUGhvbmVcIiBkZXRhaWxzPVwiKzI1NiAoMCkgNzc3IDEyMyA0NTZcIiAvPlxuICAgICAgICAgIDxDb250YWN0SW5mbyBpY29uPVwiTWFpbFwiIHRpdGxlPVwiRW1haWxcIiBkZXRhaWxzPVwiaW5mb0BraXl1bWJhLXRzcy5lZHVcIiAvPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTQ4IHctZnVsbCBiZy1ncmF5LTIwMCByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctbGcgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCBmb250LXNlbWlib2xkIHRleHQtY2VudGVyIHAtNFwiPlxuICAgICAgICAgICAgICBbR29vZ2xlIE1hcCBQbGFjZWhvbGRlcl1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1BhZ2VMYXlvdXQ+XG4gICk7XG59O1xuXG4vLyA9PT0gUG9ydGFsIExvZ2luIE1vZGFsID09PVxuaW50ZXJmYWNlIFBvcnRhbExvZ2luUHJvcHMge1xuICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBQb3J0YWxMb2dpbiA9ICh7IG9uQ2xvc2UgfTogUG9ydGFsTG9naW5Qcm9wcykgPT4ge1xuICBjb25zdCBbbG9naW5Bcywgc2V0TG9naW5Bc10gPSB1c2VTdGF0ZSgnU3R1ZGVudCcpO1xuICBjb25zdCBbaXNMb2dnZWRJbiwgc2V0SXNMb2dnZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlTG9naW4gPSAoZTogUmVhY3QuRm9ybUV2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldElzTG9nZ2VkSW4odHJ1ZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgTG9nZ2VkIGluIGFzICR7bG9naW5Bc30uIFJlZGlyZWN0aW5nIHRvIGRhc2hib2FyZC4uLmApO1xuICAgICAgb25DbG9zZSgpO1xuICAgIH0sIDE1MDApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGJnLWJsYWNrIGJnLW9wYWNpdHktNTAgei01MCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBwLTRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYmctd2hpdGUgcm91bmRlZC14bCBzaGFkb3ctMnhsIG1heC13LWxnIHctZnVsbCB0cmFuc2Zvcm0gdHJhbnNpdGlvbi1hbGwgb3ZlcmZsb3ctaGlkZGVuIGJvcmRlci10LTggYm9yZGVyLWFtYmVyLTUwMGB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiBzbTpwLThcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtYi02XCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtgdGV4dC0zeGwgZm9udC1ib2xkIHRleHQtYmx1ZS05MDBgfT5Qb3J0YWwgTG9naW48L2gyPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlfSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtZ3JheS03MDAgdHJhbnNpdGlvblwiPlxuICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiWFwiIGNsYXNzTmFtZT1cInctNyBoLTdcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWItNiBib3JkZXItYiBib3JkZXItZ3JheS0yMDBcIj5cbiAgICAgICAgICAgIHtbJ1N0dWRlbnQnLCAnVGVhY2hlciddLm1hcChyb2xlID0+IChcbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGtleT17cm9sZX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRMb2dpbkFzKHJvbGUpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTQgcHktMiBmb250LXNlbWlib2xkIHRyYW5zaXRpb24tY29sb3JzIGJvcmRlci1iLTIgJHtcbiAgICAgICAgICAgICAgICAgIGxvZ2luQXMgPT09IHJvbGUgPyBgdGV4dC1ibHVlLTkwMCBib3JkZXItYW1iZXItNTAwYCA6ICd0ZXh0LWdyYXktNTAwIGJvcmRlci10cmFuc3BhcmVudCBob3Zlcjp0ZXh0LWdyYXktNzAwJ1xuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3JvbGV9XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlTG9naW59IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgICAgPElucHV0RmllbGQgbGFiZWw9e2Ake2xvZ2luQXN9IElEIC8gVXNlcm5hbWVgfSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPXtgRW50ZXIgeW91ciAke2xvZ2luQXN9IElEYH0gLz5cbiAgICAgICAgICAgIDxJbnB1dEZpZWxkIGxhYmVsPVwiUGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIioqKioqKioqXCIgLz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9e2Byb3VuZGVkIHRleHQtYmx1ZS05MDAgYm9yZGVyLWdyYXktMzAwIGZvY3VzOnJpbmctYW1iZXItNTAwYH0gLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0yXCI+UmVtZW1iZXIgTWU8L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPXtgdGV4dC1ibHVlLTkwMCBob3Zlcjp1bmRlcmxpbmVgfT5Gb3Jnb3QgUGFzc3dvcmQ/PC9hPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc0xvZ2dlZElufVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgcHgtNiBweS0zIGZvbnQtYm9sZCByb3VuZGVkLWxnIHRleHQtd2hpdGUgYmctYmx1ZS05MDAgaG92ZXI6YmctYmx1ZS05MDAvOTAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgc2hhZG93LW1kIGRpc2FibGVkOm9wYWNpdHktNTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7aXNMb2dnZWRJbiA/IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cIkxvZ0luXCIgY2xhc3NOYW1lPVwidy01IGgtNSBtci0yIGFuaW1hdGUtc3BpblwiIC8+XG4gICAgICAgICAgICAgICAgICBMb2dnaW5nIEluLi4uXG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgYExvZ2luIGFzICR7bG9naW5Bc31gXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG4vLyA9PT0gTWFpbiBBcHAgQ29tcG9uZW50ID09PVxuXG5jb25zdCBBcHBDb21wb25lbnQgPSAoKSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoUEFHRVMuSE9NRSk7XG4gIGNvbnN0IFtpc1BvcnRhbE9wZW4sIHNldElzUG9ydGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgcmVuZGVyUGFnZSA9ICgpID0+IHtcbiAgICBzd2l0Y2ggKGN1cnJlbnRQYWdlKSB7XG4gICAgICBjYXNlIFBBR0VTLkFCT1VUOlxuICAgICAgICByZXR1cm4gPEFib3V0UGFnZSAvPjtcbiAgICAgIGNhc2UgUEFHRVMuQUNBREVNSUNTOlxuICAgICAgICByZXR1cm4gPEFjYWRlbWljc1BhZ2UgLz47XG4gICAgICBjYXNlIFBBR0VTLkFETUlTU0lPTlM6XG4gICAgICAgIHJldHVybiA8QWRtaXNzaW9uc1BhZ2UgLz47XG4gICAgICBjYXNlIFBBR0VTLk5FV1M6XG4gICAgICAgIHJldHVybiA8TmV3c0V2ZW50c1BhZ2UgLz47XG4gICAgICBjYXNlIFBBR0VTLkdBTExFUlk6XG4gICAgICAgIHJldHVybiA8R2FsbGVyeVBhZ2UgLz47XG4gICAgICBjYXNlIFBBR0VTLkNPTlRBQ1Q6XG4gICAgICAgIHJldHVybiA8Q29udGFjdFBhZ2UgLz47XG4gICAgICBjYXNlIFBBR0VTLkhPTUU6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gPEhvbWVQYWdlIHNldEN1cnJlbnRQYWdlPXtzZXRDdXJyZW50UGFnZX0gLz47XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cImFwcC1jb250YWluZXJcIiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctZ3JheS01MFwiPlxuICAgICAgPHN0eWxlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBgXG4gICAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEAxMDAuLjkwMCZkaXNwbGF5PXN3YXAnKTtcbiAgICAgICAgICAuZm9udC1pbnRlciB7IGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmOyB9XG4gICAgICBgfX0gLz5cblxuICAgICAgPEhlYWRlclxuICAgICAgICBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9XG4gICAgICAgIHNldEN1cnJlbnRQYWdlPXtzZXRDdXJyZW50UGFnZX1cbiAgICAgICAgc2V0SXNQb3J0YWxPcGVuPXtzZXRJc1BvcnRhbE9wZW59XG4gICAgICAvPlxuXG4gICAgICB7cmVuZGVyUGFnZSgpfVxuXG4gICAgICA8Rm9vdGVyIHNldEN1cnJlbnRQYWdlPXtzZXRDdXJyZW50UGFnZX0gLz5cblxuICAgICAge2lzUG9ydGFsT3BlbiAmJiA8UG9ydGFsTG9naW4gb25DbG9zZT17KCkgPT4gc2V0SXNQb3J0YWxPcGVuKGZhbHNlKX0gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBxdWVyeUNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCgpO1xuXG5jb25zdCBBcHAgPSAoKSA9PiAoXG4gIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17cXVlcnlDbGllbnR9PlxuICAgIDxUb29sdGlwUHJvdmlkZXI+XG4gICAgICA8VG9hc3RlciAvPlxuICAgICAgPFNvbm5lciAvPlxuICAgICAgPEFwcENvbXBvbmVudCAvPlxuICAgIDwvVG9vbHRpcFByb3ZpZGVyPlxuICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XG4pO1xuXG5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSEpLnJlbmRlcig8QXBwIC8+KTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlTWVtbyIsIlRvYXN0ZXIiLCJjcmVhdGVSb290IiwiU29ubmVyIiwiVG9vbHRpcFByb3ZpZGVyIiwiUXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudFByb3ZpZGVyIiwiU0NIT09MX05BTUUiLCJUQUdMSU5FIiwiUFJJTUFSWV9DT0xPUiIsIkFDQ0VOVF9DT0xPUiIsIlBBR0VTIiwiSE9NRSIsIkFCT1VUIiwiQUNBREVNSUNTIiwiQURNSVNTSU9OUyIsIk5FV1MiLCJHQUxMRVJZIiwiQ09OVEFDVCIsIkRVTU1ZX05FV1MiLCJpZCIsInRpdGxlIiwiZGF0ZSIsInN1bW1hcnkiLCJEVU1NWV9GQUNVTFRZIiwibmFtZSIsInJvbGUiLCJzcGVjaWFsdHkiLCJJY29uIiwiY2xhc3NOYW1lIiwiU3ZnTWFwIiwiSG9tZSIsInN2ZyIsInhtbG5zIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94IiwiZmlsbCIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwicGF0aCIsImQiLCJwb2x5bGluZSIsInBvaW50cyIsIlVzZXJzIiwiY2lyY2xlIiwiY3giLCJjeSIsInIiLCJCb29rT3BlbiIsIkNsaXBib2FyZExpc3QiLCJyZWN0IiwieCIsInkiLCJyeCIsInJ5IiwiQ2FsZW5kYXIiLCJJbWFnZSIsIk1haWwiLCJMb2dJbiIsImxpbmUiLCJ4MSIsIngyIiwieTEiLCJ5MiIsIk1lbnUiLCJYIiwiQ2xpcGJvYXJkQ2hlY2siLCJNYXBQaW4iLCJQaG9uZSIsIlN2Z0NvbXBvbmVudCIsIk5hdkxpbmsiLCJwYWdlIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsImlzTW9iaWxlIiwiaXNBY3RpdmUiLCJiYXNlQ2xhc3NlcyIsImFjdGl2ZUNsYXNzZXMiLCJpbmFjdGl2ZUNsYXNzZXMiLCJpY29uTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJIZWFkZXIiLCJzZXRJc1BvcnRhbE9wZW4iLCJpc01lbnVPcGVuIiwic2V0SXNNZW51T3BlbiIsIm5hdkl0ZW1zIiwiT2JqZWN0IiwidmFsdWVzIiwiaGVhZGVyIiwiZGl2Iiwic3BhbiIsIm5hdiIsIm1hcCIsIkZvb3RlciIsImZvb3RlciIsImg1IiwicCIsInVsIiwibGkiLCJhIiwiaHJlZiIsImFyaWEtbGFiZWwiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJIZXJvU2VjdGlvbiIsImgxIiwiUXVpY2tMaW5rcyIsIkxpbmtDYXJkIiwiaWNvbiIsImRlc2NyaXB0aW9uIiwiYWxlcnQiLCJoMyIsIk5ld3NIaWdobGlnaHRzIiwic2VjdGlvbiIsImgyIiwibmV3cyIsImFydGljbGUiLCJIb21lUGFnZSIsIm1haW4iLCJQYWdlTGF5b3V0IiwiY2hpbGRyZW4iLCJBYm91dFBhZ2UiLCJzdHJvbmciLCJwZXJzb24iLCJpbmRleCIsIkFjYWRlbWljc1BhZ2UiLCJJbnB1dEZpZWxkIiwibGFiZWwiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvcHRpb25zIiwic2VsZWN0Iiwib3B0Iiwib3B0aW9uIiwidmFsdWUiLCJpbnB1dCIsInJlcXVpcmVkIiwiUmVxdWlyZW1lbnRJdGVtIiwiZGV0YWlscyIsImlzSW1wb3J0YW50IiwiQWRtaXNzaW9uc1BhZ2UiLCJpc1N1Ym1pdHRlZCIsInNldElzU3VibWl0dGVkIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0VGltZW91dCIsImZvcm0iLCJvblN1Ym1pdCIsImh0bWxGb3IiLCJ0ZXh0YXJlYSIsInJvd3MiLCJkaXNhYmxlZCIsIk5ld3NFdmVudHNQYWdlIiwiR2FsbGVyeVBhZ2UiLCJjYXB0aW9uIiwiaW1nIiwic3JjIiwicmVwbGFjZSIsImFsdCIsIkNvbnRhY3RJbmZvIiwiQ29udGFjdFBhZ2UiLCJpc1NlbnQiLCJzZXRJc1NlbnQiLCJQb3J0YWxMb2dpbiIsIm9uQ2xvc2UiLCJsb2dpbkFzIiwic2V0TG9naW5BcyIsImlzTG9nZ2VkSW4iLCJzZXRJc0xvZ2dlZEluIiwiaGFuZGxlTG9naW4iLCJjb25zb2xlIiwibG9nIiwiQXBwQ29tcG9uZW50IiwiaXNQb3J0YWxPcGVuIiwicmVuZGVyUGFnZSIsInN0eWxlIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJxdWVyeUNsaWVudCIsIkFwcCIsImNsaWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sZUFBZTtBQUN0QixPQUFPQSxTQUFTQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsT0FBTyxRQUFRLFFBQVE7QUFDNUQsU0FBU0MsT0FBTyxRQUFRLDBCQUEwQjtBQUNsRCxTQUFTQyxVQUFVLFFBQVEsbUJBQW1CO0FBQzlDLFNBQVNELFdBQVdFLE1BQU0sUUFBUSx5QkFBeUI7QUFDM0QsU0FBU0MsZUFBZSxRQUFRLDBCQUEwQjtBQUMxRCxTQUFTQyxXQUFXLEVBQUVDLG1CQUFtQixRQUFRLHdCQUF3QjtBQUV6RSwrQkFBK0I7QUFDL0Is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