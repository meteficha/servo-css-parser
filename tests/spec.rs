/*
Copyright 2016 Mozilla
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed
under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
CONDITIONS OF ANY KIND, either express or implied. See the License for the
specific language governing permissions and limitations under the License.
*/

#![allow(clippy::identity_op)]

use cssparser;
use html5ever;
use parking_lot;
use selectors;
use servo_atoms;
use servo_css_parser;
use style;

use cssparser::SourceLocation;
use html5ever::Namespace;
use selectors::parser::{Combinator, Component, Selector, SelectorList};
use servo_atoms::Atom;
use servo_css_parser::parse;
use servo_css_parser::types::{MediaList, Origin, QuirksMode, Url};
use style::properties::declaration_block::{Importance, PropertyDeclarationBlock};
use style::properties::{longhands, PropertyDeclaration};
use style::servo_arc::Arc;
use style::stylesheets::{CssRule, CssRules, StyleRule};
use style::values::specified::position::PositionComponent;
use style::selector_parser::SelectorParser;

pub fn block_from<I>(iterable: I) -> PropertyDeclarationBlock
where
    I: IntoIterator<Item = (PropertyDeclaration, Importance)>,
{
    let mut block = PropertyDeclarationBlock::new();
    iterable.into_iter().for_each(|(d, i)| {
        block.push(d, i);
    });
    block
}

#[test]
fn test_simple() {
    let url = Url::parse("about::test").unwrap();
    let origin = Origin::UserAgent;
    let quirks_mode = QuirksMode::NoQuirks;
    let media = MediaList::empty();

    let css = "#someId > .someClass { background: blue; }";
    let stylesheet = parse(css, url.clone(), origin, quirks_mode, media);

    let expected = CssRules::new(
        vec![
            CssRule::Style(Arc::new(stylesheet.shared_lock.wrap(StyleRule {
                selectors: SelectorParser::parse_author_origin_no_namespace("#someId > .someClass").unwrap(),
                block: Arc::new(stylesheet.shared_lock.wrap(block_from(vec![
                    (
                        PropertyDeclaration::BackgroundColor(longhands::background_color::SpecifiedValue::Numeric {
                            authored: Some("blue".to_string().into_boxed_str()),
                            parsed: cssparser::RGBA::new(0, 0, 255, 255)
                        }),
                        Importance::Normal
                    ),
                    (
                        PropertyDeclaration::BackgroundPositionX(longhands::background_position_x::SpecifiedValue(vec![
                            PositionComponent::zero(),
                        ].into())),
                        Importance::Normal
                    ),
                    (
                        PropertyDeclaration::BackgroundPositionY(longhands::background_position_y::SpecifiedValue(vec![
                            PositionComponent::zero(),
                        ].into())),
                        Importance::Normal
                    ),
                    (
                        PropertyDeclaration::BackgroundRepeat(longhands::background_repeat::SpecifiedValue(vec![
                            longhands::background_repeat::single_value::get_initial_specified_value(),
                        ].into())),
                        Importance::Normal
                    ),
                    (
                        PropertyDeclaration::BackgroundAttachment(longhands::background_attachment::SpecifiedValue(vec![
                            longhands::background_attachment::single_value::get_initial_specified_value(),
                        ].into())),
                        Importance::Normal
                    ),
                    (
                        PropertyDeclaration::BackgroundImage(longhands::background_image::SpecifiedValue(vec![
                            longhands::background_image::single_value::get_initial_specified_value(),
                        ].into())),
                        Importance::Normal
                    ),
                    (
                        PropertyDeclaration::BackgroundSize(longhands::background_size::SpecifiedValue(vec![
                            longhands::background_size::single_value::get_initial_specified_value(),
                        ].into())),
                        Importance::Normal
                    ),
                    (
                        PropertyDeclaration::BackgroundOrigin(longhands::background_origin::SpecifiedValue(vec![
                            longhands::background_origin::single_value::get_initial_specified_value(),
                        ].into())),
                        Importance::Normal
                    ),
                    (
                        PropertyDeclaration::BackgroundClip(longhands::background_clip::SpecifiedValue(vec![
                            longhands::background_clip::single_value::get_initial_specified_value(),
                        ].into())),
                        Importance::Normal
                    ),
                ]))),
                source_location: SourceLocation { line: 0, column: 1 }
            }))),
        ],
        &stylesheet.shared_lock
    );

    assert_eq!(
        format!("{:#?}", stylesheet.contents.rules),
        format!("{:#?}", expected)
    );
}
