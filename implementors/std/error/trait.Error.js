(function() {var implementors = {};
implementors["arrayvec"] = ["impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"arrayvec/struct.CapacityError.html\" title=\"struct arrayvec::CapacityError\">CapacityError</a>&lt;T&gt;",];
implementors["bincode"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">StdError</a> for <a class=\"enum\" href=\"bincode/internal/enum.ErrorKind.html\" title=\"enum bincode::internal::ErrorKind\">ErrorKind</a>",];
implementors["darling_core"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">StdError</a> for <a class=\"struct\" href=\"darling_core/error/struct.Error.html\" title=\"struct darling_core::error::Error\">Error</a>",];
implementors["either"] = ["impl&lt;L, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a>,&nbsp;</span>",];
implementors["futures"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"futures/sync/oneshot/struct.Canceled.html\" title=\"struct futures::sync::oneshot::Canceled\">Canceled</a>","impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"futures/sync/mpsc/struct.SendError.html\" title=\"struct futures::sync::mpsc::SendError\">SendError</a>&lt;T&gt;","impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"futures/sync/mpsc/struct.TrySendError.html\" title=\"struct futures::sync::mpsc::TrySendError\">TrySendError</a>&lt;T&gt;","impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"futures/unsync/mpsc/struct.SendError.html\" title=\"struct futures::unsync::mpsc::SendError\">SendError</a>&lt;T&gt;",];
implementors["getopts"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"getopts/enum.Fail.html\" title=\"enum getopts::Fail\">Fail</a>",];
implementors["hashglobe"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"hashglobe/struct.FailedAllocationError.html\" title=\"struct hashglobe::FailedAllocationError\">FailedAllocationError</a>",];
implementors["log"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"log/struct.SetLoggerError.html\" title=\"struct log::SetLoggerError\">SetLoggerError</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"log/struct.ShutdownLoggerError.html\" title=\"struct log::ShutdownLoggerError\">ShutdownLoggerError</a>",];
implementors["ordered_float"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"ordered_float/struct.FloatIsNaN.html\" title=\"struct ordered_float::FloatIsNaN\">FloatIsNaN</a>",];
implementors["rustc_serialize"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"rustc_serialize/base64/enum.FromBase64Error.html\" title=\"enum rustc_serialize::base64::FromBase64Error\">FromBase64Error</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"rustc_serialize/hex/enum.FromHexError.html\" title=\"enum rustc_serialize::hex::FromHexError\">FromHexError</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">StdError</a> for <a class=\"enum\" href=\"rustc_serialize/json/enum.DecoderError.html\" title=\"enum rustc_serialize::json::DecoderError\">DecoderError</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">StdError</a> for <a class=\"enum\" href=\"rustc_serialize/json/enum.ParserError.html\" title=\"enum rustc_serialize::json::ParserError\">ParserError</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">StdError</a> for <a class=\"enum\" href=\"rustc_serialize/json/enum.EncoderError.html\" title=\"enum rustc_serialize::json::EncoderError\">EncoderError</a>",];
implementors["serde"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"serde/de/value/struct.Error.html\" title=\"struct serde::de::value::Error\">Error</a>",];
implementors["time"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"time/struct.OutOfRangeError.html\" title=\"struct time::OutOfRangeError\">OutOfRangeError</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"time/enum.ParseError.html\" title=\"enum time::ParseError\">ParseError</a>",];
implementors["url"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"url/enum.ParseError.html\" title=\"enum url::ParseError\">ParseError</a>",];
implementors["uuid"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"uuid/enum.ParseError.html\" title=\"enum uuid::ParseError\">ParseError</a>",];
implementors["xdg"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"xdg/struct.BaseDirectoriesError.html\" title=\"struct xdg::BaseDirectoriesError\">BaseDirectoriesError</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
