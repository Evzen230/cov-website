    var App = (() => {
    var __create = Object.create;
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __getProtoOf = Object.getPrototypeOf;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
    var __export = (target, all) => {
    for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
    var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
    if (!__hasOwnProp.call(to, key) && key !== except)
    __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
}
    return to;
};
    var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
    ));
    var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

    // react-globals:react
    var require_react = __commonJS({
    "react-globals:react"(exports, module) {
    module.exports = window.React;
}
});

    // <stdin>
    var stdin_exports = {};
    __export(stdin_exports, {
    default: () => App
});
    var import_react = __toESM(require_react());
    var IconActivity = () => /* @__PURE__ */ import_react.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ import_react.default.createElement("polyline", { points: "22 12 18 12 15 21 9 3 6 12 2 12" }));
    var IconSettings = () => /* @__PURE__ */ import_react.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ import_react.default.createElement("circle", { cx: "12", cy: "12", r: "3" }), /* @__PURE__ */ import_react.default.createElement("path", { d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" }));
    var IconMoon = () => /* @__PURE__ */ import_react.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ import_react.default.createElement("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" }));
    var IconSun = () => /* @__PURE__ */ import_react.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ import_react.default.createElement("circle", { cx: "12", cy: "12", r: "5" }), /* @__PURE__ */ import_react.default.createElement("line", { x1: "12", y1: "1", x2: "12", y2: "3" }), /* @__PURE__ */ import_react.default.createElement("line", { x1: "12", y1: "21", x2: "12", y2: "23" }), /* @__PURE__ */ import_react.default.createElement("line", { x1: "4.22", y1: "4.22", x2: "5.64", y2: "5.64" }), /* @__PURE__ */ import_react.default.createElement("line", { x1: "18.36", y1: "18.36", x2: "19.78", y2: "19.78" }), /* @__PURE__ */ import_react.default.createElement("line", { x1: "1", y1: "12", x2: "3", y2: "12" }), /* @__PURE__ */ import_react.default.createElement("line", { x1: "21", y1: "12", x2: "23", y2: "12" }), /* @__PURE__ */ import_react.default.createElement("line", { x1: "4.22", y1: "19.78", x2: "5.64", y2: "18.36" }), /* @__PURE__ */ import_react.default.createElement("line", { x1: "18.36", y1: "5.64", x2: "19.78", y2: "4.22" }));
    var IconServer = () => /* @__PURE__ */ import_react.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ import_react.default.createElement("rect", { x: "2", y: "2", width: "20", height: "8", rx: "2", ry: "2" }), /* @__PURE__ */ import_react.default.createElement("rect", { x: "2", y: "14", width: "20", height: "8", rx: "2", ry: "2" }), /* @__PURE__ */ import_react.default.createElement("line", { x1: "6", y1: "6", x2: "6.01", y2: "6" }), /* @__PURE__ */ import_react.default.createElement("line", { x1: "6", y1: "18", x2: "6.01", y2: "18" }));
    var IconWater = () => /* @__PURE__ */ import_react.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ import_react.default.createElement("path", { d: "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" }));
    var Card = ({ children, title, icon, className = "" }) => /* @__PURE__ */ import_react.default.createElement("div", { className: `bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-sm flex flex-col ${className}` }, (title || icon) && /* @__PURE__ */ import_react.default.createElement("div", { className: "px-4 py-3 border-b border-zinc-100 dark:border-zinc-800/50 flex items-center justify-between bg-zinc-50/50 dark:bg-zinc-900/50" }, /* @__PURE__ */ import_react.default.createElement("h3", { className: "font-semibold text-sm uppercase tracking-wider text-zinc-600 dark:text-zinc-400 flex items-center gap-2" }, icon && /* @__PURE__ */ import_react.default.createElement("span", { className: "text-zinc-400 dark:text-zinc-500" }, icon), title)), /* @__PURE__ */ import_react.default.createElement("div", { className: "p-4 flex-1 flex flex-col" }, children));
    var Metric = ({ label, value, unit, status = "normal" }) => {
    const statusColors = {
    normal: "text-zinc-900 dark:text-zinc-100",
    warning: "text-amber-600 dark:text-amber-500",
    danger: "text-rose-600 dark:text-rose-500"
};
    return /* @__PURE__ */ import_react.default.createElement("div", { className: "flex flex-col" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "text-xs text-zinc-500 dark:text-zinc-500 uppercase tracking-widest mb-1" }, label), /* @__PURE__ */ import_react.default.createElement("div", { className: "flex items-baseline gap-1" }, /* @__PURE__ */ import_react.default.createElement("span", { className: `text-3xl font-mono font-medium tracking-tight ${statusColors[status]}` }, value), unit && /* @__PURE__ */ import_react.default.createElement("span", { className: "text-sm font-mono text-zinc-400" }, unit)));
};
    var Sparkline = ({ data, color = "#06b6d4" }) => {
    if (!data || data.length === 0)
    return null;
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;
    const width = 300;
    const height = 100;
    const padding = 10;
    const points = data.map((val, i) => {
    const x = i / (data.length - 1) * (width - padding * 2) + padding;
    const y = height - padding - (val - min) / range * (height - padding * 2);
    return `${x},${y}`;
}).join(" ");
    const areaPoints = `${padding},${height} ${points} ${width - padding},${height}`;
    return /* @__PURE__ */ import_react.default.createElement("svg", { width: "100%", height: "100%", viewBox: `0 0 ${width} ${height}`, preserveAspectRatio: "none", className: "overflow-visible" }, /* @__PURE__ */ import_react.default.createElement("defs", null, /* @__PURE__ */ import_react.default.createElement("linearGradient", { id: `grad-${color}`, x1: "0", x2: "0", y1: "0", y2: "1" }, /* @__PURE__ */ import_react.default.createElement("stop", { offset: "0%", stopColor: color, stopOpacity: "0.2" }), /* @__PURE__ */ import_react.default.createElement("stop", { offset: "100%", stopColor: color, stopOpacity: "0" }))), /* @__PURE__ */ import_react.default.createElement("polygon", { points: areaPoints, fill: `url(#grad-${color})` }), /* @__PURE__ */ import_react.default.createElement("polyline", { points, fill: "none", stroke: color, strokeWidth: "2", strokeLinejoin: "round", strokeLinecap: "round" }));
};
    function App() {
    const [darkMode, setDarkMode] = (0, import_react.useState)(true);
    const [espOnline, setEspOnline] = (0, import_react.useState)(true);
    const [sensorOnline, setSensorOnline] = (0, import_react.useState)(true);
    const [uptime, setUptime] = (0, import_react.useState)(0);
    const [waterTemp, setWaterTemp] = (0, import_react.useState)(14.5);
    const [tempHistory, setTempHistory] = (0, import_react.useState)(Array(30).fill(14.5));
    const [logs, setLogs] = (0, import_react.useState)([
{ time: (/* @__PURE__ */ new Date()).toLocaleTimeString(), msg: "Syst\xE9m inicializov\xE1n. Pilotn\xED etapa v1.0.", type: "info" }
    ]);
    const addLog = (msg, type = "info") => {
    setLogs((prev) => [{ time: (/* @__PURE__ */ new Date()).toLocaleTimeString(), msg, type }, ...prev].slice(0, 15));
};
    (0, import_react.useEffect)(() => {
    if (!espOnline) {
    addLog("KRITICK\xC1 CHYBA: Ztr\xE1ta spojen\xED s ESP32 (Wi-Fi offline).", "error");
} else if (uptime > 0) {
    addLog("OBNOVEN\xCD: ESP32 je op\u011Bt online.", "ok");
}
}, [espOnline]);
    (0, import_react.useEffect)(() => {
    if (espOnline) {
    if (!sensorOnline) {
    addLog("CHYBA SENZORU: DS18B20 neodpov\xEDd\xE1 na 1-Wire sb\u011Brnici.", "warning");
} else if (uptime > 0) {
    addLog("SENZOR OK: Komunikace s DS18B20 obnovena.", "ok");
}
}
}, [sensorOnline, espOnline]);
    (0, import_react.useEffect)(() => {
    const tick = setInterval(() => {
    if (!espOnline)
    return;
    setUptime((prev) => prev + 1);
    if (sensorOnline) {
    setWaterTemp((prev) => {
    const newTemp = prev + (Math.random() - 0.5) * 0.1;
    const rounded = parseFloat(newTemp.toFixed(1));
    setTempHistory((th) => [...th.slice(1), rounded]);
    return rounded;
});
} else {
    setTempHistory((th) => [...th.slice(1), th[th.length - 1]]);
}
}, 2e3);
    return () => clearInterval(tick);
}, [espOnline, sensorOnline]);
    const formatUptime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor(seconds % 3600 / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
};
    return /* @__PURE__ */ import_react.default.createElement("div", { className: `${darkMode ? "dark" : ""} min-h-screen font-sans selection:bg-cyan-500/30` }, /* @__PURE__ */ import_react.default.createElement("div", { className: "min-h-screen bg-zinc-100 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-200" }, /* @__PURE__ */ import_react.default.createElement("header", { className: "sticky top-0 z-10 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 px-6 py-4 flex items-center justify-between" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "flex items-center gap-4" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "h-10 w-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-900/20" }, /* @__PURE__ */ import_react.default.createElement(IconWater, { className: "text-white" })), /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("h1", { className: "text-xl font-bold tracking-tight" }, "MONITORING \u010COV"), /* @__PURE__ */ import_react.default.createElement("div", { className: "flex items-center gap-2 text-xs font-mono text-zinc-500" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "flex h-2 w-2 relative" }, espOnline && /* @__PURE__ */ import_react.default.createElement("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" }), /* @__PURE__ */ import_react.default.createElement("span", { className: `relative inline-flex rounded-full h-2 w-2 ${espOnline ? "bg-emerald-500" : "bg-rose-500"}` })), espOnline ? "HA-LINK-ONLINE | ESP32" : "SPOJEN\xCD ZTRACENO"))), /* @__PURE__ */ import_react.default.createElement("div", { className: "flex items-center gap-6" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "hidden md:flex items-center gap-4 bg-zinc-200 dark:bg-zinc-800 px-4 py-2 rounded-full border border-zinc-300 dark:border-zinc-700" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "text-xs font-semibold uppercase text-zinc-500 tracking-wider" }, "Simulace Chyb:"), /* @__PURE__ */ import_react.default.createElement("label", { className: "flex items-center gap-2 cursor-pointer" }, /* @__PURE__ */ import_react.default.createElement("input", { type: "checkbox", checked: !espOnline, onChange: () => setEspOnline(!espOnline), className: "accent-rose-500" }), /* @__PURE__ */ import_react.default.createElement("span", { className: "text-xs" }, "V\xFDpadek Wi-Fi")), /* @__PURE__ */ import_react.default.createElement("label", { className: "flex items-center gap-2 cursor-pointer" }, /* @__PURE__ */ import_react.default.createElement("input", { type: "checkbox", checked: !sensorOnline, onChange: () => setSensorOnline(!sensorOnline), disabled: !espOnline, className: "accent-amber-500" }), /* @__PURE__ */ import_react.default.createElement("span", { className: "text-xs" }, "Senzor Odpojen"))), /* @__PURE__ */ import_react.default.createElement(
    "button",
{
    onClick: () => setDarkMode(!darkMode),
    className: "p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
},
    darkMode ? /* @__PURE__ */ import_react.default.createElement(IconSun, null) : /* @__PURE__ */ import_react.default.createElement(IconMoon, null)
    ))), /* @__PURE__ */ import_react.default.createElement("main", { className: "max-w-7xl mx-auto p-6 space-y-8" }, /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("h2", { className: "text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4 flex items-center gap-2" }, /* @__PURE__ */ import_react.default.createElement(IconActivity, null), "Pilotn\xED Etapa v1.0 (Aktivn\xED M\u011B\u0159en\xED)"), /* @__PURE__ */ import_react.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6" }, /* @__PURE__ */ import_react.default.createElement(Card, { className: `border-t-4 ${espOnline ? "border-t-emerald-500" : "border-t-rose-500"}` }, /* @__PURE__ */ import_react.default.createElement(
    Metric,
{
    label: "ESP32 Mikrokontrol\xE9r",
    value: espOnline ? "ONLINE" : "OFFLINE",
    status: espOnline ? "normal" : "danger"
}
    ), /* @__PURE__ */ import_react.default.createElement("div", { className: "mt-4 flex flex-col gap-2 text-xs font-mono text-zinc-500" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "flex justify-between" }, /* @__PURE__ */ import_react.default.createElement("span", null, "S\xED\u0165ov\xE9 API:"), /* @__PURE__ */ import_react.default.createElement("span", { className: espOnline ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-500" }, espOnline ? "ESPHome Native" : "Nedostupn\xE9")), /* @__PURE__ */ import_react.default.createElement("div", { className: "flex justify-between" }, /* @__PURE__ */ import_react.default.createElement("span", null, "Uptime:"), /* @__PURE__ */ import_react.default.createElement("span", null, espOnline ? formatUptime(uptime) : "--:--:--")), /* @__PURE__ */ import_react.default.createElement("div", { className: "flex justify-between" }, /* @__PURE__ */ import_react.default.createElement("span", null, "IP Adresa:"), /* @__PURE__ */ import_react.default.createElement("span", null, espOnline ? "192.168.1.104" : "---.---.---.---")))), /* @__PURE__ */ import_react.default.createElement(Card, { className: `border-t-4 ${espOnline && sensorOnline ? "border-t-emerald-500" : espOnline ? "border-t-amber-500" : "border-t-rose-500"}` }, /* @__PURE__ */ import_react.default.createElement(
    Metric,
{
    label: "1-Wire (DS18B20)",
    value: !espOnline ? "N/A" : sensorOnline ? "P\u0158IPOJENO" : "CHYBA",
    status: !espOnline ? "normal" : sensorOnline ? "normal" : "warning"
}
    ), /* @__PURE__ */ import_react.default.createElement("div", { className: "mt-4 flex flex-col gap-2 text-xs font-mono text-zinc-500" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "flex justify-between" }, /* @__PURE__ */ import_react.default.createElement("span", null, "Adresa za\u0159\xEDzen\xED:"), /* @__PURE__ */ import_react.default.createElement("span", null, espOnline && sensorOnline ? "0x28FF...A3" : "Nezn\xE1m\xE1")), /* @__PURE__ */ import_react.default.createElement("div", { className: "flex justify-between" }, /* @__PURE__ */ import_react.default.createElement("span", null, "Nap\xE1jen\xED:"), /* @__PURE__ */ import_react.default.createElement("span", null, espOnline ? "3.3V (Parazitn\xED NE)" : "0.0V")), /* @__PURE__ */ import_react.default.createElement("div", { className: "flex justify-between" }, /* @__PURE__ */ import_react.default.createElement("span", null, "Interval \u010Dten\xED:"), /* @__PURE__ */ import_react.default.createElement("span", null, "60 s")))), /* @__PURE__ */ import_react.default.createElement(Card, { className: `border-t-4 ${espOnline && sensorOnline ? "border-t-cyan-500" : "border-t-zinc-500"}` }, /* @__PURE__ */ import_react.default.createElement(
    Metric,
{
    label: "Teplota Vody \u010COV",
    value: espOnline && sensorOnline ? waterTemp.toFixed(1) : "--.-",
    unit: "\xB0C",
    status: espOnline && sensorOnline ? "normal" : "warning"
}
    ), /* @__PURE__ */ import_react.default.createElement("div", { className: "mt-4 h-12 w-full opacity-70" }, /* @__PURE__ */ import_react.default.createElement(
    Sparkline,
{
    data: tempHistory,
    color: !espOnline || !sensorOnline ? "#71717a" : darkMode ? "#22d3ee" : "#0891b2"
}
    ))))), /* @__PURE__ */ import_react.default.createElement("div", { className: "opacity-60" }, /* @__PURE__ */ import_react.default.createElement("h2", { className: "text-sm font-bold uppercase tracking-widest text-zinc-400 mb-4 flex items-center gap-2" }, /* @__PURE__ */ import_react.default.createElement(IconServer, null), "Budouc\xED Etapy (Roz\u0161\xED\u0159en\xED)"), /* @__PURE__ */ import_react.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6" }, /* @__PURE__ */ import_react.default.createElement(Card, { className: "border-t-4 border-t-zinc-300 dark:border-t-zinc-700 bg-zinc-50/50 dark:bg-zinc-900/30" }, /* @__PURE__ */ import_react.default.createElement(Metric, { label: "Hladina Vody", value: "\u010CEK\xC1", unit: "", status: "normal" }), /* @__PURE__ */ import_react.default.createElement("div", { className: "mt-4 text-xs text-zinc-500" }, "Senzor: Ultrazvuk (4-20 mA)"), /* @__PURE__ */ import_react.default.createElement("div", { className: "mt-1 text-xs text-zinc-500" }, "Status: Bude implementov\xE1no v Etap\u011B 2")), /* @__PURE__ */ import_react.default.createElement(Card, { className: "border-t-4 border-t-zinc-300 dark:border-t-zinc-700 bg-zinc-50/50 dark:bg-zinc-900/30" }, /* @__PURE__ */ import_react.default.createElement(Metric, { label: "Dmychadlo (230V)", value: "ODD\u011ALENO", unit: "", status: "normal" }), /* @__PURE__ */ import_react.default.createElement("div", { className: "mt-4 text-xs text-zinc-500" }, "Bezpe\u010Dnostn\xED pravidlo: Zcela fyzicky odd\u011Bleno"), /* @__PURE__ */ import_react.default.createElement("div", { className: "mt-1 text-xs text-zinc-500" }, "Status: Pl\xE1nov\xE1na pasivn\xED detekce proudu")), /* @__PURE__ */ import_react.default.createElement(Card, { className: "border-t-4 border-t-zinc-300 dark:border-t-zinc-700 bg-zinc-50/50 dark:bg-zinc-900/30" }, /* @__PURE__ */ import_react.default.createElement(Metric, { label: "Kvalita Vody (pH/ORP)", value: "\u010CEK\xC1", unit: "", status: "normal" }), /* @__PURE__ */ import_react.default.createElement("div", { className: "mt-4 text-xs text-zinc-500" }, "Vy\u017Eaduje: Galvanick\xE9 odd\u011Blen\xED, kalibraci"), /* @__PURE__ */ import_react.default.createElement("div", { className: "mt-1 text-xs text-zinc-500" }, "Status: Odlo\u017Eeno z d\u016Fvodu slo\u017Eitosti m\u011B\u0159en\xED")))), /* @__PURE__ */ import_react.default.createElement(Card, { title: "Syst\xE9mov\xFD Log / Ud\xE1losti (Home Assistant API)", icon: /* @__PURE__ */ import_react.default.createElement(IconSettings, null), className: "h-64" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "bg-zinc-950 text-emerald-400 p-4 rounded-lg flex-1 overflow-auto font-mono text-sm border border-zinc-800 shadow-inner" }, logs.map((log, i) => {
    let color = "text-emerald-400";
    if (log.type === "error")
    color = "text-rose-500 font-bold";
    if (log.type === "warning")
    color = "text-amber-400 font-semibold";
    if (log.type === "info")
    color = "text-cyan-400";
    return /* @__PURE__ */ import_react.default.createElement("div", { key: i, className: "mb-1 opacity-90 hover:opacity-100 transition-opacity flex gap-4" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "text-zinc-500 shrink-0" }, "[", log.time, "]"), /* @__PURE__ */ import_react.default.createElement("span", { className: color }, log.msg));
}), /* @__PURE__ */ import_react.default.createElement("div", { className: "mt-2 text-zinc-600 animate-pulse" }, "_"))))));
}
    return __toCommonJS(stdin_exports);
})();

    document.addEventListener('DOMContentLoaded', function() {
    const root = ReactDOM.createRoot(document.getElementById('root'));

    // Include the compiled error boundary code
    var ErrorBoundaryModule = (() => {
    var __defProp = Object.defineProperty;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __getOwnPropSymbols = Object.getOwnPropertySymbols;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __propIsEnum = Object.prototype.propertyIsEnumerable;
    var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
    var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
    __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
    if (__propIsEnum.call(b, prop))
    __defNormalProp(a, prop, b[prop]);
}
    return a;
};
    var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
    target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
    if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
    target[prop] = source[prop];
}
    return target;
};
    var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

    // node_modules/react/cjs/react.development.js
    var require_react_development = __commonJS({
    "node_modules/react/cjs/react.development.js"(exports, module) {
    "use strict";
    (function() {
    function defineDeprecationWarning(methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
    get: function() {
    console.warn(
    "%s(...) is deprecated in plain JavaScript React classes. %s",
    info[0],
    info[1]
    );
}
});
}
    function getIteratorFn(maybeIterable) {
    if (null === maybeIterable || "object" !== typeof maybeIterable)
    return null;
    maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
    return "function" === typeof maybeIterable ? maybeIterable : null;
}
    function warnNoop(publicInstance, callerName) {
    publicInstance = (publicInstance = publicInstance.constructor) && (publicInstance.displayName || publicInstance.name) || "ReactClass";
    var warningKey = publicInstance + "." + callerName;
    didWarnStateUpdateForUnmountedComponent[warningKey] || (console.error(
    "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
    callerName,
    publicInstance
    ), didWarnStateUpdateForUnmountedComponent[warningKey] = true);
}
    function Component(props, context, updater) {
    this.props = props;
    this.context = context;
    this.refs = emptyObject;
    this.updater = updater || ReactNoopUpdateQueue;
}
    function ComponentDummy() {
}
    function PureComponent(props, context, updater) {
    this.props = props;
    this.context = context;
    this.refs = emptyObject;
    this.updater = updater || ReactNoopUpdateQueue;
}
    function testStringCoercion(value) {
    return "" + value;
}
    function checkKeyStringCoercion(value) {
    try {
    testStringCoercion(value);
    var JSCompiler_inline_result = false;
} catch (e) {
    JSCompiler_inline_result = true;
}
    if (JSCompiler_inline_result) {
    JSCompiler_inline_result = console;
    var JSCompiler_temp_const = JSCompiler_inline_result.error;
    var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
    JSCompiler_temp_const.call(
    JSCompiler_inline_result,
    "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
    JSCompiler_inline_result$jscomp$0
    );
    return testStringCoercion(value);
}
}
    function getComponentNameFromType(type) {
    if (null == type)
    return null;
    if ("function" === typeof type)
    return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
    if ("string" === typeof type)
    return type;
    switch (type) {
    case REACT_FRAGMENT_TYPE:
    return "Fragment";
    case REACT_PROFILER_TYPE:
    return "Profiler";
    case REACT_STRICT_MODE_TYPE:
    return "StrictMode";
    case REACT_SUSPENSE_TYPE:
    return "Suspense";
    case REACT_SUSPENSE_LIST_TYPE:
    return "SuspenseList";
    case REACT_ACTIVITY_TYPE:
    return "Activity";
}
    if ("object" === typeof type)
    switch ("number" === typeof type.tag && console.error(
    "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
    ), type.$$typeof) {
    case REACT_PORTAL_TYPE:
    return "Portal";
    case REACT_CONTEXT_TYPE:
    return (type.displayName || "Context") + ".Provider";
    case REACT_CONSUMER_TYPE:
    return (type._context.displayName || "Context") + ".Consumer";
    case REACT_FORWARD_REF_TYPE:
    var innerType = type.render;
    type = type.displayName;
    type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
    return type;
    case REACT_MEMO_TYPE:
    return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
    case REACT_LAZY_TYPE:
    innerType = type._payload;
    type = type._init;
    try {
    return getComponentNameFromType(type(innerType));
} catch (x) {
}
}
    return null;
}
    function getTaskName(type) {
    if (type === REACT_FRAGMENT_TYPE)
    return "<>";
    if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE)
    return "<...>";
    try {
    var name = getComponentNameFromType(type);
    return name ? "<" + name + ">" : "<...>";
} catch (x) {
    return "<...>";
}
}
    function getOwner() {
    var dispatcher = ReactSharedInternals.A;
    return null === dispatcher ? null : dispatcher.getOwner();
}
    function UnknownOwner() {
    return Error("react-stack-top-frame");
}
    function hasValidKey(config) {
    if (hasOwnProperty.call(config, "key")) {
    var getter = Object.getOwnPropertyDescriptor(config, "key").get;
    if (getter && getter.isReactWarning)
    return false;
}
    return void 0 !== config.key;
}
    function defineKeyPropWarningGetter(props, displayName) {
    function warnAboutAccessingKey() {
    specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error(
    "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
    displayName
    ));
}
    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, "key", {
    get: warnAboutAccessingKey,
    configurable: true
});
}
    function elementRefGetterWithDeprecationWarning() {
    var componentName = getComponentNameFromType(this.type);
    didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error(
    "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
    ));
    componentName = this.props.ref;
    return void 0 !== componentName ? componentName : null;
}
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
    self = props.ref;
    type = {
    $$typeof: REACT_ELEMENT_TYPE,
    type,
    key,
    props,
    _owner: owner
};
    null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
    enumerable: false,
    get: elementRefGetterWithDeprecationWarning
}) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
    type._store = {};
    Object.defineProperty(type._store, "validated", {
    configurable: false,
    enumerable: false,
    writable: true,
    value: 0
});
    Object.defineProperty(type, "_debugInfo", {
    configurable: false,
    enumerable: false,
    writable: true,
    value: null
});
    Object.defineProperty(type, "_debugStack", {
    configurable: false,
    enumerable: false,
    writable: true,
    value: debugStack
});
    Object.defineProperty(type, "_debugTask", {
    configurable: false,
    enumerable: false,
    writable: true,
    value: debugTask
});
    Object.freeze && (Object.freeze(type.props), Object.freeze(type));
    return type;
}
    function cloneAndReplaceKey(oldElement, newKey) {
    newKey = ReactElement(
    oldElement.type,
    newKey,
    void 0,
    void 0,
    oldElement._owner,
    oldElement.props,
    oldElement._debugStack,
    oldElement._debugTask
    );
    oldElement._store && (newKey._store.validated = oldElement._store.validated);
    return newKey;
}
    function isValidElement(object) {
    return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
}
    function escape(key) {
    var escaperLookup = { "=": "=0", ":": "=2" };
    return "$" + key.replace(/[=:]/g, function(match) {
    return escaperLookup[match];
});
}
    function getElementKey(element, index) {
    return "object" === typeof element && null !== element && null != element.key ? (checkKeyStringCoercion(element.key), escape("" + element.key)) : index.toString(36);
}
    function noop$1() {
}
    function resolveThenable(thenable) {
    switch (thenable.status) {
    case "fulfilled":
    return thenable.value;
    case "rejected":
    throw thenable.reason;
    default:
    switch ("string" === typeof thenable.status ? thenable.then(noop$1, noop$1) : (thenable.status = "pending", thenable.then(
    function(fulfilledValue) {
    "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
},
    function(error) {
    "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
}
    )), thenable.status) {
    case "fulfilled":
    return thenable.value;
    case "rejected":
    throw thenable.reason;
}
}
    throw thenable;
}
    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
    var type = typeof children;
    if ("undefined" === type || "boolean" === type)
    children = null;
    var invokeCallback = false;
    if (null === children)
    invokeCallback = true;
    else
    switch (type) {
    case "bigint":
    case "string":
    case "number":
    invokeCallback = true;
    break;
    case "object":
    switch (children.$$typeof) {
    case REACT_ELEMENT_TYPE:
    case REACT_PORTAL_TYPE:
    invokeCallback = true;
    break;
    case REACT_LAZY_TYPE:
    return invokeCallback = children._init, mapIntoArray(
    invokeCallback(children._payload),
    array,
    escapedPrefix,
    nameSoFar,
    callback
    );
}
}
    if (invokeCallback) {
    invokeCallback = children;
    callback = callback(invokeCallback);
    var childKey = "" === nameSoFar ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
    isArrayImpl(callback) ? (escapedPrefix = "", null != childKey && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
    return c;
})) : null != callback && (isValidElement(callback) && (null != callback.key && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), escapedPrefix = cloneAndReplaceKey(
    callback,
    escapedPrefix + (null == callback.key || invokeCallback && invokeCallback.key === callback.key ? "" : ("" + callback.key).replace(
    userProvidedKeyEscapeRegex,
    "$&/"
    ) + "/") + childKey
    ), "" !== nameSoFar && null != invokeCallback && isValidElement(invokeCallback) && null == invokeCallback.key && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array.push(callback));
    return 1;
}
    invokeCallback = 0;
    childKey = "" === nameSoFar ? "." : nameSoFar + ":";
    if (isArrayImpl(children))
    for (var i = 0; i < children.length; i++)
    nameSoFar = children[i], type = childKey + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(
    nameSoFar,
    array,
    escapedPrefix,
    type,
    callback
    );
    else if (i = getIteratorFn(children), "function" === typeof i)
    for (i === children.entries && (didWarnAboutMaps || console.warn(
    "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
    ), didWarnAboutMaps = true), children = i.call(children), i = 0; !(nameSoFar = children.next()).done; )
    nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(
    nameSoFar,
    array,
    escapedPrefix,
    type,
    callback
    );
    else if ("object" === type) {
    if ("function" === typeof children.then)
    return mapIntoArray(
    resolveThenable(children),
    array,
    escapedPrefix,
    nameSoFar,
    callback
    );
    array = String(children);
    throw Error(
    "Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead."
    );
}
    return invokeCallback;
}
    function mapChildren(children, func, context) {
    if (null == children)
    return children;
    var result = [], count = 0;
    mapIntoArray(children, result, "", "", function(child) {
    return func.call(context, child, count++);
});
    return result;
}
    function lazyInitializer(payload) {
    if (-1 === payload._status) {
    var ctor = payload._result;
    ctor = ctor();
    ctor.then(
    function(moduleObject) {
    if (0 === payload._status || -1 === payload._status)
    payload._status = 1, payload._result = moduleObject;
},
    function(error) {
    if (0 === payload._status || -1 === payload._status)
    payload._status = 2, payload._result = error;
}
    );
    -1 === payload._status && (payload._status = 0, payload._result = ctor);
}
    if (1 === payload._status)
    return ctor = payload._result, void 0 === ctor && console.error(
    "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",
    ctor
    ), "default" in ctor || console.error(
    "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",
    ctor
    ), ctor.default;
    throw payload._result;
}
    function resolveDispatcher() {
    var dispatcher = ReactSharedInternals.H;
    null === dispatcher && console.error(
    "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
    );
    return dispatcher;
}
    function noop() {
}
    function enqueueTask(task) {
    if (null === enqueueTaskImpl)
    try {
    var requireString = ("require" + Math.random()).slice(0, 7);
    enqueueTaskImpl = (module && module[requireString]).call(
    module,
    "timers"
    ).setImmediate;
} catch (_err) {
    enqueueTaskImpl = function(callback) {
    false === didWarnAboutMessageChannel && (didWarnAboutMessageChannel = true, "undefined" === typeof MessageChannel && console.error(
    "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
    ));
    var channel = new MessageChannel();
    channel.port1.onmessage = callback;
    channel.port2.postMessage(void 0);
};
}
    return enqueueTaskImpl(task);
}
    function aggregateErrors(errors) {
    return 1 < errors.length && "function" === typeof AggregateError ? new AggregateError(errors) : errors[0];
}
    function popActScope(prevActQueue, prevActScopeDepth) {
    prevActScopeDepth !== actScopeDepth - 1 && console.error(
    "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
    );
    actScopeDepth = prevActScopeDepth;
}
    function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
    var queue = ReactSharedInternals.actQueue;
    if (null !== queue)
    if (0 !== queue.length)
    try {
    flushActQueue(queue);
    enqueueTask(function() {
    return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
});
    return;
} catch (error) {
    ReactSharedInternals.thrownErrors.push(error);
}
    else
    ReactSharedInternals.actQueue = null;
    0 < ReactSharedInternals.thrownErrors.length ? (queue = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(queue)) : resolve(returnValue);
}
    function flushActQueue(queue) {
    if (!isFlushing) {
    isFlushing = true;
    var i = 0;
    try {
    for (; i < queue.length; i++) {
    var callback = queue[i];
    do {
    ReactSharedInternals.didUsePromise = false;
    var continuation = callback(false);
    if (null !== continuation) {
    if (ReactSharedInternals.didUsePromise) {
    queue[i] = callback;
    queue.splice(0, i);
    return;
}
    callback = continuation;
} else
    break;
} while (1);
}
    queue.length = 0;
} catch (error) {
    queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);
} finally {
    isFlushing = false;
}
}
}
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, didWarnStateUpdateForUnmountedComponent = {}, ReactNoopUpdateQueue = {
    isMounted: function() {
    return false;
},
    enqueueForceUpdate: function(publicInstance) {
    warnNoop(publicInstance, "forceUpdate");
},
    enqueueReplaceState: function(publicInstance) {
    warnNoop(publicInstance, "replaceState");
},
    enqueueSetState: function(publicInstance) {
    warnNoop(publicInstance, "setState");
}
}, assign = Object.assign, emptyObject = {};
    Object.freeze(emptyObject);
    Component.prototype.isReactComponent = {};
    Component.prototype.setState = function(partialState, callback) {
    if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState)
    throw Error(
    "takes an object of state variables to update or a function which returns an object of state variables."
    );
    this.updater.enqueueSetState(this, partialState, callback, "setState");
};
    Component.prototype.forceUpdate = function(callback) {
    this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
};
    var deprecatedAPIs = {
    isMounted: [
    "isMounted",
    "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
    ],
    replaceState: [
    "replaceState",
    "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
    ]
}, fnName;
    for (fnName in deprecatedAPIs)
    deprecatedAPIs.hasOwnProperty(fnName) && defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    ComponentDummy.prototype = Component.prototype;
    deprecatedAPIs = PureComponent.prototype = new ComponentDummy();
    deprecatedAPIs.constructor = PureComponent;
    assign(deprecatedAPIs, Component.prototype);
    deprecatedAPIs.isPureReactComponent = true;
    var isArrayImpl = Array.isArray, REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = {
    H: null,
    A: null,
    T: null,
    S: null,
    V: null,
    actQueue: null,
    isBatchingLegacy: false,
    didScheduleLegacyUpdate: false,
    didUsePromise: false,
    thrownErrors: [],
    getCurrentStack: null,
    recentlyCreatedOwnerStacks: 0
}, hasOwnProperty = Object.prototype.hasOwnProperty, createTask = console.createTask ? console.createTask : function() {
    return null;
};
    deprecatedAPIs = {
    "react-stack-bottom-frame": function(callStackForError) {
    return callStackForError();
}
};
    var specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = deprecatedAPIs["react-stack-bottom-frame"].bind(deprecatedAPIs, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutMaps = false, userProvidedKeyEscapeRegex = /\/+/g, reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
    if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
    var event = new window.ErrorEvent("error", {
    bubbles: true,
    cancelable: true,
    message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
    error
});
    if (!window.dispatchEvent(event))
    return;
} else if ("object" === typeof process && "function" === typeof process.emit) {
    process.emit("uncaughtException", error);
    return;
}
    console.error(error);
}, didWarnAboutMessageChannel = false, enqueueTaskImpl = null, actScopeDepth = 0, didWarnNoAwaitAct = false, isFlushing = false, queueSeveralMicrotasks = "function" === typeof queueMicrotask ? function(callback) {
    queueMicrotask(function() {
    return queueMicrotask(callback);
});
} : enqueueTask;
    deprecatedAPIs = Object.freeze({
    __proto__: null,
    c: function(size) {
    return resolveDispatcher().useMemoCache(size);
}
});
    exports.Children = {
    map: mapChildren,
    forEach: function(children, forEachFunc, forEachContext) {
    mapChildren(
    children,
    function() {
    forEachFunc.apply(this, arguments);
},
    forEachContext
    );
},
    count: function(children) {
    var n = 0;
    mapChildren(children, function() {
    n++;
});
    return n;
},
    toArray: function(children) {
    return mapChildren(children, function(child) {
    return child;
}) || [];
},
    only: function(children) {
    if (!isValidElement(children))
    throw Error(
    "React.Children.only expected to receive a single React element child."
    );
    return children;
}
};
    exports.Component = Component;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.Profiler = REACT_PROFILER_TYPE;
    exports.PureComponent = PureComponent;
    exports.StrictMode = REACT_STRICT_MODE_TYPE;
    exports.Suspense = REACT_SUSPENSE_TYPE;
    exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
    exports.__COMPILER_RUNTIME = deprecatedAPIs;
    exports.act = function(callback) {
    var prevActQueue = ReactSharedInternals.actQueue, prevActScopeDepth = actScopeDepth;
    actScopeDepth++;
    var queue = ReactSharedInternals.actQueue = null !== prevActQueue ? prevActQueue : [], didAwaitActCall = false;
    try {
    var result = callback();
} catch (error) {
    ReactSharedInternals.thrownErrors.push(error);
}
    if (0 < ReactSharedInternals.thrownErrors.length)
    throw popActScope(prevActQueue, prevActScopeDepth), callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
    if (null !== result && "object" === typeof result && "function" === typeof result.then) {
    var thenable = result;
    queueSeveralMicrotasks(function() {
    didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error(
    "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
    ));
});
    return {
    then: function(resolve, reject) {
    didAwaitActCall = true;
    thenable.then(
    function(returnValue) {
    popActScope(prevActQueue, prevActScopeDepth);
    if (0 === prevActScopeDepth) {
    try {
    flushActQueue(queue), enqueueTask(function() {
    return recursivelyFlushAsyncActWork(
    returnValue,
    resolve,
    reject
    );
});
} catch (error$0) {
    ReactSharedInternals.thrownErrors.push(error$0);
}
    if (0 < ReactSharedInternals.thrownErrors.length) {
    var _thrownError = aggregateErrors(
    ReactSharedInternals.thrownErrors
    );
    ReactSharedInternals.thrownErrors.length = 0;
    reject(_thrownError);
}
} else
    resolve(returnValue);
},
    function(error) {
    popActScope(prevActQueue, prevActScopeDepth);
    0 < ReactSharedInternals.thrownErrors.length ? (error = aggregateErrors(
    ReactSharedInternals.thrownErrors
    ), ReactSharedInternals.thrownErrors.length = 0, reject(error)) : reject(error);
}
    );
}
};
}
    var returnValue$jscomp$0 = result;
    popActScope(prevActQueue, prevActScopeDepth);
    0 === prevActScopeDepth && (flushActQueue(queue), 0 !== queue.length && queueSeveralMicrotasks(function() {
    didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error(
    "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
    ));
}), ReactSharedInternals.actQueue = null);
    if (0 < ReactSharedInternals.thrownErrors.length)
    throw callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
    return {
    then: function(resolve, reject) {
    didAwaitActCall = true;
    0 === prevActScopeDepth ? (ReactSharedInternals.actQueue = queue, enqueueTask(function() {
    return recursivelyFlushAsyncActWork(
    returnValue$jscomp$0,
    resolve,
    reject
    );
})) : resolve(returnValue$jscomp$0);
}
};
};
    exports.cache = function(fn) {
    return function() {
    return fn.apply(null, arguments);
};
};
    exports.captureOwnerStack = function() {
    var getCurrentStack = ReactSharedInternals.getCurrentStack;
    return null === getCurrentStack ? null : getCurrentStack();
};
    exports.cloneElement = function(element, config, children) {
    if (null === element || void 0 === element)
    throw Error(
    "The argument must be a React element, but you passed " + element + "."
    );
    var props = assign({}, element.props), key = element.key, owner = element._owner;
    if (null != config) {
    var JSCompiler_inline_result;
    a: {
    if (hasOwnProperty.call(config, "ref") && (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(
    config,
    "ref"
    ).get) && JSCompiler_inline_result.isReactWarning) {
    JSCompiler_inline_result = false;
    break a;
}
    JSCompiler_inline_result = void 0 !== config.ref;
}
    JSCompiler_inline_result && (owner = getOwner());
    hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key);
    for (propName in config)
    !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
}
    var propName = arguments.length - 2;
    if (1 === propName)
    props.children = children;
    else if (1 < propName) {
    JSCompiler_inline_result = Array(propName);
    for (var i = 0; i < propName; i++)
    JSCompiler_inline_result[i] = arguments[i + 2];
    props.children = JSCompiler_inline_result;
}
    props = ReactElement(
    element.type,
    key,
    void 0,
    void 0,
    owner,
    props,
    element._debugStack,
    element._debugTask
    );
    for (key = 2; key < arguments.length; key++)
    owner = arguments[key], isValidElement(owner) && owner._store && (owner._store.validated = 1);
    return props;
};
    exports.createContext = function(defaultValue) {
    defaultValue = {
    $$typeof: REACT_CONTEXT_TYPE,
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    _threadCount: 0,
    Provider: null,
    Consumer: null
};
    defaultValue.Provider = defaultValue;
    defaultValue.Consumer = {
    $$typeof: REACT_CONSUMER_TYPE,
    _context: defaultValue
};
    defaultValue._currentRenderer = null;
    defaultValue._currentRenderer2 = null;
    return defaultValue;
};
    exports.createElement = function(type, config, children) {
    for (var i = 2; i < arguments.length; i++) {
    var node = arguments[i];
    isValidElement(node) && node._store && (node._store.validated = 1);
}
    i = {};
    node = null;
    if (null != config)
    for (propName in didWarnAboutOldJSXRuntime || !("__self" in config) || "key" in config || (didWarnAboutOldJSXRuntime = true, console.warn(
    "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
    )), hasValidKey(config) && (checkKeyStringCoercion(config.key), node = "" + config.key), config)
    hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (i[propName] = config[propName]);
    var childrenLength = arguments.length - 2;
    if (1 === childrenLength)
    i.children = children;
    else if (1 < childrenLength) {
    for (var childArray = Array(childrenLength), _i = 0; _i < childrenLength; _i++)
    childArray[_i] = arguments[_i + 2];
    Object.freeze && Object.freeze(childArray);
    i.children = childArray;
}
    if (type && type.defaultProps)
    for (propName in childrenLength = type.defaultProps, childrenLength)
    void 0 === i[propName] && (i[propName] = childrenLength[propName]);
    node && defineKeyPropWarningGetter(
    i,
    "function" === typeof type ? type.displayName || type.name || "Unknown" : type
    );
    var propName = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
    return ReactElement(
    type,
    node,
    void 0,
    void 0,
    getOwner(),
    i,
    propName ? Error("react-stack-top-frame") : unknownOwnerDebugStack,
    propName ? createTask(getTaskName(type)) : unknownOwnerDebugTask
    );
};
    exports.createRef = function() {
    var refObject = { current: null };
    Object.seal(refObject);
    return refObject;
};
    exports.forwardRef = function(render) {
    null != render && render.$$typeof === REACT_MEMO_TYPE ? console.error(
    "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
    ) : "function" !== typeof render ? console.error(
    "forwardRef requires a render function but was given %s.",
    null === render ? "null" : typeof render
    ) : 0 !== render.length && 2 !== render.length && console.error(
    "forwardRef render functions accept exactly two parameters: props and ref. %s",
    1 === render.length ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
    );
    null != render && null != render.defaultProps && console.error(
    "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
    );
    var elementType = { $$typeof: REACT_FORWARD_REF_TYPE, render }, ownName;
    Object.defineProperty(elementType, "displayName", {
    enumerable: false,
    configurable: true,
    get: function() {
    return ownName;
},
    set: function(name) {
    ownName = name;
    render.name || render.displayName || (Object.defineProperty(render, "name", { value: name }), render.displayName = name);
}
});
    return elementType;
};
    exports.isValidElement = isValidElement;
    exports.lazy = function(ctor) {
    return {
    $$typeof: REACT_LAZY_TYPE,
    _payload: { _status: -1, _result: ctor },
    _init: lazyInitializer
};
};
    exports.memo = function(type, compare) {
    null == type && console.error(
    "memo: The first argument must be a component. Instead received: %s",
    null === type ? "null" : typeof type
    );
    compare = {
    $$typeof: REACT_MEMO_TYPE,
    type,
    compare: void 0 === compare ? null : compare
};
    var ownName;
    Object.defineProperty(compare, "displayName", {
    enumerable: false,
    configurable: true,
    get: function() {
    return ownName;
},
    set: function(name) {
    ownName = name;
    type.name || type.displayName || (Object.defineProperty(type, "name", { value: name }), type.displayName = name);
}
});
    return compare;
};
    exports.startTransition = function(scope) {
    var prevTransition = ReactSharedInternals.T, currentTransition = {};
    ReactSharedInternals.T = currentTransition;
    currentTransition._updatedFibers = /* @__PURE__ */ new Set();
    try {
    var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
    null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
    "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && returnValue.then(noop, reportGlobalError);
} catch (error) {
    reportGlobalError(error);
} finally {
    null === prevTransition && currentTransition._updatedFibers && (scope = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < scope && console.warn(
    "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
    )), ReactSharedInternals.T = prevTransition;
}
};
    exports.unstable_useCacheRefresh = function() {
    return resolveDispatcher().useCacheRefresh();
};
    exports.use = function(usable) {
    return resolveDispatcher().use(usable);
};
    exports.useActionState = function(action, initialState, permalink) {
    return resolveDispatcher().useActionState(
    action,
    initialState,
    permalink
    );
};
    exports.useCallback = function(callback, deps) {
    return resolveDispatcher().useCallback(callback, deps);
};
    exports.useContext = function(Context) {
    var dispatcher = resolveDispatcher();
    Context.$$typeof === REACT_CONSUMER_TYPE && console.error(
    "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
    );
    return dispatcher.useContext(Context);
};
    exports.useDebugValue = function(value, formatterFn) {
    return resolveDispatcher().useDebugValue(value, formatterFn);
};
    exports.useDeferredValue = function(value, initialValue) {
    return resolveDispatcher().useDeferredValue(value, initialValue);
};
    exports.useEffect = function(create, createDeps, update) {
    null == create && console.warn(
    "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
    );
    var dispatcher = resolveDispatcher();
    if ("function" === typeof update)
    throw Error(
    "useEffect CRUD overload is not enabled in this build of React."
    );
    return dispatcher.useEffect(create, createDeps);
};
    exports.useId = function() {
    return resolveDispatcher().useId();
};
    exports.useImperativeHandle = function(ref, create, deps) {
    return resolveDispatcher().useImperativeHandle(ref, create, deps);
};
    exports.useInsertionEffect = function(create, deps) {
    null == create && console.warn(
    "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
    );
    return resolveDispatcher().useInsertionEffect(create, deps);
};
    exports.useLayoutEffect = function(create, deps) {
    null == create && console.warn(
    "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
    );
    return resolveDispatcher().useLayoutEffect(create, deps);
};
    exports.useMemo = function(create, deps) {
    return resolveDispatcher().useMemo(create, deps);
};
    exports.useOptimistic = function(passthrough, reducer) {
    return resolveDispatcher().useOptimistic(passthrough, reducer);
};
    exports.useReducer = function(reducer, initialArg, init) {
    return resolveDispatcher().useReducer(reducer, initialArg, init);
};
    exports.useRef = function(initialValue) {
    return resolveDispatcher().useRef(initialValue);
};
    exports.useState = function(initialState) {
    return resolveDispatcher().useState(initialState);
};
    exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
    return resolveDispatcher().useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
    );
};
    exports.useTransition = function() {
    return resolveDispatcher().useTransition();
};
    exports.version = "19.1.0";
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
})();
}
});

    // node_modules/react/index.js
    var require_react = __commonJS({
    "node_modules/react/index.js"(exports, module) {
    "use strict";
    if (false) {
    module.exports = null;
} else {
    module.exports = require_react_development();
}
}
});

    // <stdin>
    var require_stdin = __commonJS({
    "<stdin>"(exports, module) {
    var React = require_react();
    function createErrorBoundary() {
    return class ErrorBoundary extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
    hasError: false,
    error: null,
    errorInfo: null,
    isCopied: false,
    isMinimized: false,
    isFullWidth: true,
    copyButtonState: "default"
};
    this.copyErrorToClipboard = this.copyErrorToClipboard.bind(this);
    this.toggleMinimize = this.toggleMinimize.bind(this);
    this.toggleFullWidth = this.toggleFullWidth.bind(this);
}
    static getDerivedStateFromError(error) {
    return {
    hasError: true,
    error,
    errorInfo: null,
    isCopied: false,
    isMinimized: false,
    // Start expanded when error occurs
    isFullWidth: false,
    copyButtonState: "default"
};
}
    componentDidCatch(error, errorInfo) {
    this.setState({
    error,
    errorInfo
});
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
}
    copyErrorToClipboard() {
    if (this.state.error) {
    const errorText = `Error: ${this.state.error.toString()}

Component Stack:
${this.state.errorInfo ? this.state.errorInfo.componentStack : "Not available"}`;
    const fallbackCopyTextToClipboard = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
    const successful = document.execCommand("copy");
    const msg = successful ? "Text copied to clipboard" : "Failed to copy text";
    console.log(msg);
    this.setState({
    isCopied: successful,
    copyButtonState: successful ? "copied" : "default"
});
    if (successful) {
    setTimeout(() => {
    this.setState({
    isCopied: false,
    copyButtonState: "default"
});
}, 2e3);
}
} catch (err) {
    console.error("Fallback: Failed to copy text: ", err);
} finally {
    document.body.removeChild(textArea);
}
};
    if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(errorText);
    return;
}
    navigator.clipboard.writeText(errorText).then(() => {
    this.setState({
    isCopied: true,
    copyButtonState: "copied"
});
    setTimeout(() => {
    this.setState({
    isCopied: false,
    copyButtonState: "default"
});
}, 2e3);
}).catch((err) => {
    console.error("Failed to copy error details:", err);
    fallbackCopyTextToClipboard(errorText);
});
}
}
    toggleMinimize() {
    this.setState((prevState) => ({
    isMinimized: !prevState.isMinimized,
    // If minimizing, ensure it's not full width
    isFullWidth: prevState.isMinimized ? prevState.isFullWidth : false
}));
}
    toggleFullWidth() {
    if (!this.state.isMinimized) {
    this.setState((prevState) => ({
    isFullWidth: !prevState.isFullWidth
}));
}
}
    render() {
    if (this.state.hasError) {
    const { isMinimized, isFullWidth, isCopied, error, errorInfo } = this.state;
    const AlertTriangleIcon = (_a) => {
    var _b = _a, { className } = _b, otherProps = __objRest(_b, ["className"]);
    return /* @__PURE__ */ React.createElement(
    "svg",
    __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: isMinimized ? "16" : "20",
    height: isMinimized ? "16" : "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: className || "text-red-500 dark:text-red-400"
}, otherProps),
    /* @__PURE__ */ React.createElement("path", { d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" }),
    /* @__PURE__ */ React.createElement("line", { x1: "12", y1: "9", x2: "12", y2: "13" }),
    /* @__PURE__ */ React.createElement("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })
    );
};
    const CopyIcon = () => /* @__PURE__ */ React.createElement(
    "svg",
{
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
},
    /* @__PURE__ */ React.createElement("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2", ry: "2" }),
    /* @__PURE__ */ React.createElement("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })
    );
    const MinimizeIcon = () => /* @__PURE__ */ React.createElement(
    "svg",
{
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
},
    /* @__PURE__ */ React.createElement("line", { x1: "5", y1: "12", x2: "19", y2: "12" })
    );
    const ExpandIcon = () => /* @__PURE__ */ React.createElement(
    "svg",
{
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
},
    /* @__PURE__ */ React.createElement("polyline", { points: "15 3 21 3 21 9" }),
    /* @__PURE__ */ React.createElement("polyline", { points: "9 21 3 21 3 15" }),
    /* @__PURE__ */ React.createElement("line", { x1: "21", y1: "3", x2: "14", y2: "10" }),
    /* @__PURE__ */ React.createElement("line", { x1: "3", y1: "21", x2: "10", y2: "14" })
    );
    const CompressIcon = () => /* @__PURE__ */ React.createElement(
    "svg",
{
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
},
    /* @__PURE__ */ React.createElement("polyline", { points: "4 14 10 14 10 20" }),
    /* @__PURE__ */ React.createElement("polyline", { points: "20 10 14 10 14 4" }),
    /* @__PURE__ */ React.createElement("line", { x1: "14", y1: "10", x2: "21", y2: "3" }),
    /* @__PURE__ */ React.createElement("line", { x1: "3", y1: "21", x2: "10", y2: "14" })
    );
    const RefreshIcon = () => /* @__PURE__ */ React.createElement(
    "svg",
{
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
},
    /* @__PURE__ */ React.createElement("path", { d: "M23 4v6h-6" }),
    /* @__PURE__ */ React.createElement("path", { d: "M1 20v-6h6" }),
    /* @__PURE__ */ React.createElement("path", { d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" })
    );
    const CheckIcon = () => /* @__PURE__ */ React.createElement(
    "svg",
{
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
},
    /* @__PURE__ */ React.createElement("path", { d: "M20 6L9 17l-5-5" })
    );
    if (isMinimized) {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, this.props.children, /* @__PURE__ */ React.createElement(
    "div",
{
    className: "fixed bottom-4 right-4 z-[9999]",
    onClick: this.toggleMinimize
},
    /* @__PURE__ */ React.createElement("div", { className: "group flex items-center justify-center w-10 h-10 rounded-full bg-red-500 shadow-lg cursor-pointer hover:bg-red-600 transition-colors dark:bg-red-700 dark:hover:bg-red-600" }, /* @__PURE__ */ React.createElement(AlertTriangleIcon, { className: "text-white dark:text-gray-100" }), /* @__PURE__ */ React.createElement("div", { className: "absolute right-12 bottom-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap dark:bg-gray-900 shadow-md" }, "Error - Click to expand"))
    ));
}
    const baseContainerClasses = "fixed bottom-0 z-[9999] transition-all duration-300 ease-in-out mb-8";
    const innerBoxBaseClasses = "relative overflow-hidden rounded-lg border border-red-300 bg-white shadow-xl dark:border-red-700 dark:bg-gray-950";
    const positionAndWidthClass = isFullWidth ? "inset-x-0 w-full" : "right-4 w-[32rem] max-w-[90vw]";
    const paddingClass = isFullWidth ? "p-4" : "";
    return /* @__PURE__ */ React.createElement(React.Fragment, null, this.props.children, /* @__PURE__ */ React.createElement("div", { className: `${baseContainerClasses} ${positionAndWidthClass} ${paddingClass}` }, /* @__PURE__ */ React.createElement(
    "div",
{
    className: `${innerBoxBaseClasses} ${isFullWidth ? "mx-auto" : ""}`,
    style: isFullWidth ? { maxWidth: "100%" } : {}
},
    /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between bg-gradient-to-r from-red-100 to-red-200 px-3 py-2 dark:from-red-950/50 dark:to-red-900/50" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement(AlertTriangleIcon, { className: "text-red-500 dark:text-red-400" }), /* @__PURE__ */ React.createElement("h3", { className: "text-sm font-semibold text-red-800 dark:text-red-300" }, "Sorry, something went wrong")), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-1" }, /* @__PURE__ */ React.createElement(
    "button",
{
    onClick: () => window.location.reload(),
    className: "rounded p-1 text-gray-600 hover:bg-red-200/50 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-red-800/50 dark:hover:text-gray-200 transition-colors",
    title: "Refresh page"
},
    /* @__PURE__ */ React.createElement(RefreshIcon, null)
    ), /* @__PURE__ */ React.createElement(
    "button",
{
    onClick: this.toggleFullWidth,
    className: "rounded p-1 text-gray-600 hover:bg-red-200/50 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-red-800/50 dark:hover:text-gray-200 transition-colors",
    title: isFullWidth ? "Reduce width" : "Expand to full width"
},
    isFullWidth ? /* @__PURE__ */ React.createElement(CompressIcon, null) : /* @__PURE__ */ React.createElement(ExpandIcon, null)
    ), /* @__PURE__ */ React.createElement(
    "button",
{
    onClick: this.toggleMinimize,
    className: "rounded p-1 text-gray-600 hover:bg-red-200/50 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-red-800/50 dark:hover:text-gray-200 transition-colors",
    title: "Minimize"
},
    /* @__PURE__ */ React.createElement(MinimizeIcon, null)
    ))),
    /* @__PURE__ */ React.createElement("div", { className: "p-4" }, /* @__PURE__ */ React.createElement("div", { className: "mb-3" }, /* @__PURE__ */ React.createElement("p", { className: "text-sm text-gray-700 dark:text-gray-300" }, "You can copy the error details and ask Gemini to fix the error.")), /* @__PURE__ */ React.createElement(
    "div",
{
    className: `overflow-auto rounded bg-gray-50 p-3 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 scrollbar-none ${isFullWidth ? "max-h-[40vh]" : "max-h-60"}`
},
    /* @__PURE__ */ React.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ React.createElement("div", { className: "space-y-1" }, /* @__PURE__ */ React.createElement("h4", { className: "text-xs uppercase font-semibold text-gray-500 dark:text-gray-400" }, "Error Message:"), /* @__PURE__ */ React.createElement("p", { className: "font-mono text-xs text-red-700 dark:text-red-400 break-words px-2 py-1.5 bg-red-50 dark:bg-red-900/30 rounded border border-red-100 dark:border-red-900/50" }, error ? error.toString() : "No error message available.")), errorInfo && /* @__PURE__ */ React.createElement("div", { className: "space-y-1" }, /* @__PURE__ */ React.createElement("h4", { className: "text-xs uppercase font-semibold text-gray-500 dark:text-gray-400" }, "Component Stack:"), /* @__PURE__ */ React.createElement("pre", { className: "whitespace-pre-wrap font-mono text-xs text-gray-700 dark:text-gray-300 px-2 py-1.5 bg-gray-100 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700" }, errorInfo.componentStack)))
    ), /* @__PURE__ */ React.createElement("div", { className: "mt-4" }, /* @__PURE__ */ React.createElement(
    "button",
{
    onClick: this.copyErrorToClipboard,
    className: `flex items-center justify-center gap-2 px-4 py-2 text-white rounded-md transition-colors w-full ${this.state.copyButtonState === "copied" ? "bg-blue-600 hover:bg-blue-700" : "bg-indigo-600 hover:bg-indigo-700"}`
},
    this.state.copyButtonState === "copied" ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(CheckIcon, null), "Copied to Clipboard!") : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(CopyIcon, null), "Copy Error Details")
    )))
    )));
}
    return this.props.children;
}
};
}
    module.exports = { createErrorBoundary };
}
});
    return require_stdin();
})();
    /*! Bundled license information:

    react/cjs/react.development.js:
      (**
       * @license React
       * react.development.js
       *
       * Copyright (c) Meta Platforms, Inc. and affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       *)
    */


    // Use the exported createErrorBoundary function
    const ErrorBoundary = ErrorBoundaryModule.createErrorBoundary();

    const AppComponent = React.createElement(
    ErrorBoundary,
    null,
    React.createElement(App.default, null)
    );
    root.render(AppComponent);
});
